import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from '@iqx-limited/ngx-toastr';

@Component({
  selector: 'app-index',
  // imports: [],
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {

  // variables
  mProgress = signal(false)

  search_term:any
  itemForm:any

  constructor(
    // private mHomeService: HomeService,
    public mToastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    // validation
    this.search_term = new FormControl('', Validators.required)
    this.itemForm = new FormGroup({
      search_term: this.search_term,
    })
  }

  // onChange
  onSearch(formValues: any){
    this.mToastrService.success(formValues.search_term)
    // this.mProgress.set(true)
    // this.mHomeService.searchItems(formValues).subscribe({
    //   next: (response) => {
    //     if(response){
    //       this.mRoles = (response as any).data
    //       this.mToastrService.success((response as any).message)
    //       this.mProgress.set(false)
    //     }
    //   },
    //   error: (error ) => {
    //     if(error.error.message){
    //       this.mToastrService.warning(error.error.message)
    //     }
    //     this.mProgress.set(false)
    //   }
    // })
  }

}
