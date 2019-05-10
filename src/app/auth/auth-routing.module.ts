import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'sign-in'
}, {
  path: 'sign-in',
  component: SignInComponent
}, {
  path: 'sign-up',
  component: SignUpComponent
}, {
  path: 'forgot-password',
  component: ForgotPasswordComponent
}, {
  path: 'verify-email',
  component: VerifyEmailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
