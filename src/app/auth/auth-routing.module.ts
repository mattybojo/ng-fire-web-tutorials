import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { SecureInnerPagesGuard } from '../shared/guards/secure-inner-pages.guard';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'sign-in'
}, {
  path: 'sign-in',
  component: SignInComponent,
  canActivate: [SecureInnerPagesGuard]
}, {
  path: 'sign-up',
  component: SignUpComponent,
  canActivate: [SecureInnerPagesGuard]
}, {
  path: 'forgot-password',
  component: ForgotPasswordComponent,
  canActivate: [SecureInnerPagesGuard]
}, {
  path: 'verify-email',
  component: VerifyEmailComponent,
  canActivate: [SecureInnerPagesGuard]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
