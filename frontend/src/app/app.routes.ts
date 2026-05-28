import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authGuard } from './guards/auth.guard';
export const routes: Routes = [

  {
    path: '',
    component: WelcomeComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
  path: 'signup',
  component: SignupComponent
},


  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },

  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },


];
