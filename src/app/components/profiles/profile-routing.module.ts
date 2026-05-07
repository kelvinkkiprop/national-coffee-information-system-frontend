import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';


// Routes
const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent,
    data: {
      title: 'Profile'
    }
  },
  {
    path: 'create',
    component: CreateComponent,
    data: {
      title: 'Profile / Consultant Verification'
    }
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    data: {
      title: 'Profile / Consultant Details'
    }
  },
  {
    path: 'show/:id',
    component: ShowComponent,
    data: {
      title: 'Profile / Show'
    }
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Add
    RouterModule.forChild(routes)
  ],
  // Add
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
