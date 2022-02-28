import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userService:UserService;
  router:Router
  userName = ""
  userPassword=""
  userEmail=""
  userCedula=""
  constructor(router:Router,userService:UserService) { 
    this.router=router
    this.userService=userService
  }

  ngOnInit(): void {
  }

  
  async onUserNameCreate(){
    if (this.userName == "" || this.userPassword=="" || this.userEmail=="" || this.userCedula=="") {
      alert("El nombre o password no deben estar vacíos.")
      return
    }
    const loginValidation = await this.userService.createUserName(this.userEmail,this.userName,this.userCedula, this.userPassword)
    if(loginValidation==true){
      alert("Usuario creado con exito")
      this.router.navigateByUrl('/login');
    }

  }
    

}
