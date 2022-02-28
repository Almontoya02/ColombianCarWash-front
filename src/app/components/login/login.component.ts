import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userService:UserService;
  router:Router
  userPassword=""
  userEmail=""
  constructor(router:Router,userService:UserService) {
    this.router=router
    this.userService=userService
  }

  ngOnInit(): void {
  }

  async loginUser(){
    if (this.userEmail == "" || this.userPassword=="") {
      alert("El nombre o password no deben estar vacíos.")
      return
    }
    const loginValidation = await this.userService.loginUserName(this.userEmail,this.userPassword)
    console.log("Login Validation return: "+loginValidation)
    if(loginValidation==true){
      this.router.navigateByUrl('/home');
    }else{
      alert("User or Password Incorrect")
    }
    
  }
}
