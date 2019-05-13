import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [{
  path: '',
  component: DashboardComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
