import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ProcessComponent } from './process/process.component';
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
      title: 'Licenses'
    }
  },
  {
    path: 'create',
    component: CreateComponent,
    data: {
      title: 'Licenses / Create'
    }
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    data: {
      title: 'Licenses / Edit'
    }
  },
  {
    path: 'show/:id',
    component: ShowComponent,
    data: {
      title: 'Licenses / Show'
    }
  },

  {
    path: 'process/:id',
    component: ProcessComponent,
    data: {
      title: 'Licenses / Process'
    }
  }
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
export class LicenseRoutingModule { }
