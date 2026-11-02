import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { CommitteeService } from '../../../services/committee.service';
import swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-show',
  // imports: [],
  standalone: false,
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',
})
export class ShowComponent {

  // variables
  mProgress = signal(false)
  itemForm:any

  item:any ={}
  id:any

  mUsers:any
  mMembers:any

  constructor(
    private mCommitteeService: CommitteeService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {
    // validation
    this.itemForm = this.fb.group({
      user_id: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    // Call
    this.getItem()
    this.loadUnpaginatedItems()
  }

  // getItem
  getItem(): void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress.set(true);
    this.mCommitteeService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any
          this.mMembers = this.item.members
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message)
        }
        this.mProgress.set(false);
      }
    });
  }


  // loadUnpaginatedItems
  loadUnpaginatedItems(){
    this.mProgress.set(true);
    this.mCommitteeService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          this.mUsers = (response as any).data.users
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        this.mToastrService.warning(error.error.message)
        this.mProgress.set(false)
      }
    });
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
      title: 'Remove "'+item.user?.name+'"?',
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
            this.mCommitteeService.deleteMemberItem(item).subscribe({
              next: (response) => {
                if(response){
                  // console.log(response)
                  this.mMembers = this.mMembers.filter((items: { id: any })=>items.id !== item.id)
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
    const item: any = {
      committee_id: this.id,
      user_id: formValues.user_id,
    }
    this.mProgress.set(true)
    this.mCommitteeService.addMemberItem(item).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message)
          this.mMembers = (response as any).data.members
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


