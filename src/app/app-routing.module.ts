import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationGuard } from './services/authentication.guard';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent,
  },
  {
    path:"register",
    component: RegisterComponent,
  },
  {
    path:"home",
    component: HomeComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path:"form",
    component: FormComponent,
    canActivate: [AuthenticationGuard]
  },
  {path:'',pathMatch:'full', redirectTo:'login'},
  {path:'**',pathMatch:'full', redirectTo:'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthenticationGuard]
})
export class AppRoutingModule { }
