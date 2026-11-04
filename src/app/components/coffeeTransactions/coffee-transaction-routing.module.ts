import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
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
      title: 'Coffee Transactions'
    }
  },
  {
    path: 'create',
    component: CreateComponent,
    data: {
      title: 'Coffee Transactions / Create'
    }
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    data: {
      title: 'Coffee Transactions / Edit'
    }
  },
  {
    path: 'show/:id',
    component: ShowComponent,
    data: {
      title: 'Coffee Transactions / Show'
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
export class CoffeeTransactionRoutingModule { }
