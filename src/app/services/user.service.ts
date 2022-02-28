import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from './api-response.model';
import { Form } from './form.model';
import { RecordService } from './record.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  email: string="";
  token: string = "";
  userPassword: string = ""
  cedula=""
  name=""
  constructor(private httpClient:HttpClient, private form:RecordService) {  }

  async createUserName(email:string,name:string,cedula:string,password:string):Promise<boolean>{
    try{
      const registerResponse:ApiResponse = await this.createRegisterRequest(email,name,cedula,password)
      if(registerResponse.status==false){
        alert("Fallo al registrarse o usuario existente: " + registerResponse.message.toString())
        return false;
      }
      return true;
    }catch(error){
      return false
    }
  }

  async loginUserName(email:string,password:string):Promise<boolean>{
    try{
      const loginResponse:ApiResponse = await this.loginRegisterRequest(email,password)
      if(loginResponse.status==false){
        return false;
      }
      localStorage.setItem("name",loginResponse.data.name)
      localStorage.setItem("email",email)
      localStorage.setItem("token",loginResponse.data.token)
      localStorage.setItem("cedula",loginResponse.data.cedula)
      this.cedula=loginResponse.data.cedula
      alert("Bienvenido: " + loginResponse.data.name)
      this.email=email
      this.token=loginResponse.data.token
      return true;
    }catch(error){
      return false
    }
  }

  async createRegisterRequest(email:string,name: string,cedula:string,password:string):Promise<ApiResponse>{
    const data = await this.httpClient.post(environment.serverUrl+"/user/register",{email,name,cedula,password}).toPromise();
    const json = JSON.parse(JSON.stringify(data))
    return {status:json["status"],message:json["message"],data:json["data"]}
    
  } 

  async loginRegisterRequest(email: string,password:string):Promise<ApiResponse>{
    const data = await this.httpClient.post(environment.serverUrl+"/user/login",{email,password}).toPromise();
    const json = JSON.parse(JSON.stringify(data))
    return {status:json["status"],message:json["message"],data:json["data"]}
  }
  signOut(){
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    localStorage.removeItem("token")
    localStorage.removeItem("cedula")
    this.email=""
    this.name=""
    this.token=""
    this.cedula=""
    this.form.listRecord=[]
  }
}
