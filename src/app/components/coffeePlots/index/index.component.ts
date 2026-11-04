import { Component, signal } from '@angular/core';
// import
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import swal from 'sweetalert2';
import { AppContextService } from '../../../core/app-context.service';
import { CoffeePlotService } from '../../../services/coffee-plot.service';

@Component({
  selector: 'app-index',
  // imports: [],
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {


  // variables
  mPlots: any = {}
  links:any= []
  mPageFrom: any

  mProgress = signal(false)

  search_term:any
  itemForm:any

  constructor(
    private mCoffeePlotService: CoffeePlotService,
    public mToastrService: ToastrService,
    public mAppContextService: AppContextService
  ) { }

  ngOnInit(): void {
    // Call
    this.index()

    // validation
    this.search_term = new FormControl('', Validators.required)
    this.itemForm = new FormGroup({
      search_term: this.search_term,
    })

  }

  // index
  index(){
    this.mProgress.set(true)
    this.mCoffeePlotService.allItems().subscribe({
      next: (response) => {
        if(response){
          this.mPageFrom = (response as any).from
          this.mPlots = (response as any).data
          this.links = (response as any).links
        }
        this.mProgress.set(false)
      },
      error: (error) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message)
        }
        this.mProgress.set(false)
      }
    })

  }

  //onChangePage
  onChangePage(item:any){

    this.mProgress.set(true)
    this.mCoffeePlotService.paginateItems(item).subscribe({
      next: (response) => {
        if(response){
          this.mPageFrom = (response as any).from
          this.mPlots =(response as any).data
          this.links = (response as any).links
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        // console.log(error)
        if(error.error.message){
          this.mToastrService.warning(error.error.message)
        }
        this.mProgress.set(false)
      }
    })

  }

 // onDelete
  onDelete(item:any){
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        cancelButton: 'btn btn-dark',
        confirmButton: 'btn btn-danger ms-2'
      },
      buttonsStyling: false
    })

    // Show
    // swal.fire({
    swalWithBootstrapButtons.fire({
      title: 'Remove "'+item.name+'"?',
      text: "You won't be able to revert this!",
      icon: 'error',
      showCancelButton: true,
      reverseButtons: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Delete',
      // confirmButtonColor: '#e3342f',
      // cancelButtonColor: '#3490dc'
      }).then((result) => {
          //Delete
          if (result.isConfirmed) {
            this.mProgress.set(true)
            this.mCoffeePlotService.deleteItem(item).subscribe({
              next: (response) => {
                if(response){
                  // console.log(response)
                  this.mPlots = this.mPlots.filter((items: { id: any })=>items.id !== item.id)
                  this.mToastrService.warning((response as any).message)
                  this.mProgress.set(false)
                }
              },
              error: (error) => {
                // console.log(error)
                if(error.error.message){
                  this.mToastrService.warning(error.error.message)
                }
                this.mProgress.set(false)
              }
            })

        }
      })

  }

  // onSubmit
  onSubmit(formValues: any){
    this.mProgress.set(true)
    this.mCoffeePlotService.searchItems(formValues).subscribe({
      next: (response) => {
        if(response){
          this.mPlots = (response as any).salutations
          this.mToastrService.success((response as any).message)
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message)
        }
        this.mProgress.set(false)
      }
    })
  }

  // onSearch
  onSearch(formValues: any){
    this.mProgress.set(true)
    this.mCoffeePlotService.searchItems(formValues).subscribe({
      next: (response) => {
        if(response){
          this.mPlots = (response as any).data
          this.mToastrService.success((response as any).message)
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message)
        }
        this.mProgress.set(false)
      }
    })
  }


}


