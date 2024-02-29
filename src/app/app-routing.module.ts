import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthServiceService } from './shared/services/auth-service.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'login',
    component: LoginComponent,
    canMatch: [AuthServiceService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canMatch: [AuthServiceService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
