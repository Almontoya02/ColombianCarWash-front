import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from 'src/app/services/form.model';
import { RecordService } from 'src/app/services/record.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  clientName=""
  clientId=""
  clientEmail=""
  empleado:any=""
  empleadoId:any=""
  listRecords=[]
  tipoLavado=""
  tipoVehiculo=""
  washPrice=0
  recordService:RecordService
  constructor(private router:Router, recordService:RecordService, private userService:UserService) { 
    this.recordService=recordService
    this.empleado=localStorage.getItem("name")
    this.empleadoId=localStorage.getItem("cedula")
  }

  ngOnInit(): void {
    this.recordService.getRecords(localStorage.getItem('email'),localStorage.getItem('cedula'),localStorage.getItem('token'))
    this.recordService.listRecord.length
  }

  convertToDate(date:any):string{
    let stringDate = ""
    const firstString = new Date((date-18000)*1000).toISOString().split("T")
    const secondString = firstString[1].split(":")
    stringDate = firstString[0] + " " + secondString[0] + ":" + secondString[1]
    return stringDate
  }
  
  signOut():void{
    this.userService.signOut();
    this.router.navigateByUrl("/login")
  }

  calculate(){

    let tipo=0
    let vehiculo=0
    this.tipoLavado=="Brillado" ? tipo=20000:null;
    this.tipoLavado=="Sencillo" ? tipo=10000:null; 
    this.tipoVehiculo=="Motocicleta" ? vehiculo=5000:null;
    this.tipoVehiculo=="Camion" ? vehiculo=60000:null;
    this.tipoVehiculo=="Automovil" ? vehiculo=30000:null;

    this.washPrice=tipo+vehiculo
    return this.washPrice
  }

  async createRecord(){
    if(this.clientEmail=="" || this.clientId=="" || this.clientName=="" || this.tipoLavado=="" || this.tipoVehiculo==""){
      alert("Ingrese todos los datos")
    }
    let form = new Form(
      localStorage.getItem("cedula"),
      localStorage.getItem("name"),
      this.clientEmail,
      this.clientName,
      this.clientId,
      this.tipoVehiculo,
      this.tipoLavado,
      this.washPrice,
      this.getDAte());
    
    const recordValidation = await this.recordService.createRecord(form,localStorage.getItem("email"),localStorage.getItem("token"))
    
    if(recordValidation){
      alert("Registro exitoso");
      if(await this.recordService.sendEmail(form,localStorage.getItem("email"),localStorage.getItem("token"))){
        alert("Correo enviado!")
        this.router.navigateByUrl("/home")
      }
    }  
  }

  getDAte(){
    var hoy = new Date();
    var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    var fechaYHora = fecha + ' ' + hora;
    return fechaYHora;
  }

}
