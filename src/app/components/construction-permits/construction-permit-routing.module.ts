import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { ProcessComponent } from './process/process.component';


//Routes
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
      title: 'Construction Permits'
    }
  },
  {
    path: 'create',
    component: CreateComponent,
    data: {
      title: 'Construction Permits / Create',
    }
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    data: {
      title: 'Construction Permits / Edit',
    }
  },
  {
    path: 'show/:id',
    component: ShowComponent,
    data: {
      title: 'Construction Permits / Show',
    }
  },

  {
    path: 'process/:id',
    component: ProcessComponent,
    data: {
      title: 'Construction Permits / Process',
    }
  },

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //Add
    RouterModule.forChild(routes)
  ],
  // Add
  exports: [RouterModule]
})
export class ConstructionPermitRoutingModule { }
