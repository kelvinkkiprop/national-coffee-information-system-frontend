import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';
import { SupportComponent } from './show/inc/support/support.component';
import { HowItWorksComponent } from './show/inc/how-it-works/how-it-works.component';
import { StandardsComponent } from './show/inc/standards/standards.component';


// Routes
const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: IndexComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'details',
    component: ShowComponent,
    data: {
      title: 'Details'
    },
    children: [
      {
        path: 'support',
        component: SupportComponent,
        data: {
          title: 'Support'
        }
      },
      {
        path: 'how-it-works',
        component: HowItWorksComponent,
        data: {
          title: 'How it Works'
        }
      },
      {
        path: 'standards',
        component: StandardsComponent,
        data: {
          title: 'Standards'
        }
      },
    ]
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
export class HomeRoutingModule { }
