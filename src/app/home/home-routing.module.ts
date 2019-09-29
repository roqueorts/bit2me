import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

export const HOME_ROUTES = RouterModule.forChild(homeRoutes);

@NgModule({
  declarations: [],
  imports: [
    HOME_ROUTES
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
