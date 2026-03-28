import { Component } from '@angular/core';
//Import
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';
import { PlanSubmissionService } from '../../../services/plan-submission.service';


@Component({
  selector: 'app-index',
  // imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  standalone: false
})
export class IndexComponent {


  //variables
  mSolutionDefinitions: any = {}
  mProgress: boolean = false
  links:any= []
  mPageFrom: any

  search_term:any
  itemForm:any

  constructor(
    private mPlanSubmissionService: PlanSubmissionService,
    public mToastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Call
    this.index()

    // validation
    this.search_term = new FormControl('', Validators.required);
    this.itemForm = new FormGroup({
      search_term: this.search_term,
    });


  }

  // index
  index(){
    this.mProgress = true
    this.mPlanSubmissionService.allItems().subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          this.mPageFrom = (response as any).from
          this.mSolutionDefinitions =(response as any).data;
          this.links = (response as any).links;
          this.mProgress = false;
        }
      },
      error: (error ) => {
        // console.log(error);
          // console.log(error)
        if(error.error.message){
          this.mToastrService.error(error.error.message);
        }
        this.mProgress = false
      }
    });

  }

  //onChangePage
  onChangePage(item:any){
    // console.log(item);

    this.mProgress = true
    this.mPlanSubmissionService.paginateItems(item).subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          this.mPageFrom = (response as any).from
          this.mSolutionDefinitions =(response as any).data;
          this.links = (response as any).links;
          this.mProgress = false;
        }
      },
      error: (error ) => {
        // console.log(error);
        if(error.error.message){
          this.mToastrService.error(error.error.message);
        }
        this.mProgress = false
      }
    });

  }

  //onDelete
  onDelete(item:any){
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        cancelButton: 'btn btn-dark',
        confirmButton: 'btn btn-danger ms-2'
      },
      buttonsStyling: false
    })

    //Show
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
            this.mProgress = true
            this.mPlanSubmissionService.deleteItem(item).subscribe({
              next: (response) => {
                if(response){
                  // console.log(response)
                  this.mSolutionDefinitions = this.mSolutionDefinitions.filter((items: { id: any; })=>items.id !== item.id);
                  this.mToastrService.error((response as any).message);
                  this.mProgress = false
                }
              },
              error: (error ) => {
                // console.log(error);
                if(error.error.message){
                  this.mToastrService.error(error.error.message);
                }
                this.mProgress = false
              }
            });

        }
      });

  }

  //onSubmit
  onSubmit(formValues: any){
    this.mProgress = true
    this.mPlanSubmissionService.searchItems(formValues).subscribe({
      next: (response) => {
        if(response){
          this.mSolutionDefinitions = (response as any).salutations
          // console.log(response);
          this.mToastrService.success((response as any).message);
          this.mProgress = false
        }
      },
      error: (error ) => {
        // console.log(error);
        if(error.error.message){
          this.mToastrService.error(error.error.message);
        }
        this.mProgress = false
      }
    });
  }

  //onSearch
  onSearch(formValues: any){
    this.mProgress = true
    this.mPlanSubmissionService.searchItems(formValues).subscribe({
      next: (response) => {
        if(response){
          this.mSolutionDefinitions = (response as any).data
          // console.log(response)
          this.mToastrService.success((response as any).message)
          this.mProgress = false
        }
      },
      error: (error ) => {
        // console.log(error)
        if(error.error.message){
          this.mToastrService.error(error.error.message)
        }
        this.mProgress = false
      }
    })
  }


}
