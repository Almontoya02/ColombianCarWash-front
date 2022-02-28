import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router:Router){

  }
  get isLogged() {

    if(localStorage.getItem('token') && localStorage.getItem('token')){
      return true
    }else{
      alert("Por favor logueate primero")
      this.router.navigateByUrl("/login");
      return false
    }
  }
}
