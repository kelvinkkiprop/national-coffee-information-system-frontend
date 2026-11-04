import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';
import { LocationsComponent } from './show/inc/locations/locations.component';


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
      title: 'Coffee Plots'
    }
  },
  {
    path: 'create',
    component: CreateComponent,
    data: {
      title: 'Coffee Plots / Create'
    }
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    data: {
      title: 'Coffee Plots / Edit'
    }
  },
  {
    path: 'show/:id',
    component: ShowComponent,
    data: {
      title: 'Coffee Plots / Show'
    }
  },
  // Other
  {
    path: 'locations',
    component: LocationsComponent,
    data: {
      title: 'Coffee Plots / Locations'
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
export class CoffeePlotRoutingModule { }
