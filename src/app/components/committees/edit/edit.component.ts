import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { Committee } from '../../../interfaces/committee';
import { Role } from '../../../interfaces/role';
import { CommitteeService } from '../../../services/committee.service';

@Component({
  selector: 'app-edit',
  // imports: [],
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {

  // variables
  itemForm:any
  mProgress = signal(false)

  id:any
  item:Committee = {}

  constructor(
    private mCommitteeService: CommitteeService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    // validation
    this.itemForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
    });
  }


  ngOnInit(): void {
    // Call
    this.getItem()
  }

  // getItem
  getItem(): void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress.set(true);
    this.mCommitteeService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message)
        }
        this.mProgress.set(false)
      }
    });
  }

  // onSubmit
  onSubmit(formValues: any){
    const item: Role = {
      id: this.item.id,
      name: formValues.name,
    }

    this.mProgress.set(true);
    this.mCommitteeService.updateItem(item).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message)
          this.router.navigateByUrl('/committees')
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message)
        }
        this.mProgress.set(false)
      }
    });
  }

}
