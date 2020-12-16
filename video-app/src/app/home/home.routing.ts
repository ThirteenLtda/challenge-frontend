import { Routes, RouterModule } from '@angular/router'
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home.component'

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
  },
  { 
    path: ':id/details', 
    component: DetailsComponent,
  }
];

export const HomeRoutes = RouterModule.forChild(routes);