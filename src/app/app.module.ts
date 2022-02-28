
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InputComponent } from './components/input/input.component';
import { FormComponent } from './components/form/form.component';
import { CardLavadosComponent } from './components/card-lavados/card-lavados.component';
import { FormsModule } from '@angular/forms';
import { BtnPrincipalComponent } from './components/btn-principal/btn-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    InputComponent,
    FormComponent,
    CardLavadosComponent,
    BtnPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
