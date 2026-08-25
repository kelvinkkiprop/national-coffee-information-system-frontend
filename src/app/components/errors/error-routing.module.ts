import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';


// Routes
const routes: Routes = [
  {
    path: '',
    redirectTo: ':param1/:param2',
    pathMatch: 'full'
  },
  {
    path: ':param1/:param2',
    component: IndexComponent,
    data: {
      title: 'Index'
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
export class ErrorRoutingModule { }
