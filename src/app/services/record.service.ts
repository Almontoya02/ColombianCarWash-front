import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Form } from './form.model';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  listRecord:Form[]=[]
  constructor(private httpClient:HttpClient) {  }

  async getRecordsRequest(email:string,cedula:string,token:string){
    const data = await this.httpClient.get(environment.serverUrl+`/record/getbyuser/${cedula}`,
    {
      headers:{
        email,
        "access-token":token
      }
    }
    ).toPromise();
    const json = JSON.parse(JSON.stringify(data))
    return {status:json["status"],message:json["message"],data:json["data"]}
  }

  async getRecords(email:any,cedula:any,token:any){
    const response = await this.getRecordsRequest(email,cedula,token);
    const records = response.data.record
    this.listRecord=records
  }

  async createRecord(form:Form,email:any,token:any){
    try{
      const record = await this.createRecordRequest(form,email,token)
      if(record.status==false){
        return false
      }
      this.listRecord=[]
      return true
      
    }catch(error){
      console.error(error);
      return false
      
    }
  }

  async sendEmail(form:Form,email:any,token:any){
    try{
      const sendEmail = await this.sendEmailRequest(form,email,token)
      if(sendEmail.status==false){
        return false
      }
      return true
      
    }catch(error){
      console.error(error);
      return false
      
    }
  }
  async createRecordRequest(form:Form,email:any,token:any){
    const data = await  this.httpClient.post(environment.serverUrl+"/record/create",{
      workerId:form.workerId,
      workerName:form.workerName,
      clientId:form.clientId,
      clientName:form.clientName,
      clientEmail:form.clientEmail,
      vehicleType:form.vehicleType,
      washType:form.washType,
      washPrice:form.washPrice
    },{
      headers:{
        email,
        "access-token":token,
      }
    }).toPromise();
    const json = JSON.parse(JSON.stringify(data))
    return {status:json["status"],message:json["message"],data:json["data"]}
  }
  async sendEmailRequest(form:Form,email:any,token:any){
    const data = await  this.httpClient.post(environment.serverUrl+"/record/sendrecord",{
      clientId:form.clientId,
      clientEmail:form.clientEmail,
      clientName:form.clientName,
      vehicleType:form.vehicleType,
      washType:form.washType,
      washPrice:form.washPrice
    },{
      headers:{
        email,
        "access-token":token,
      }
    }).toPromise();
    const json = JSON.parse(JSON.stringify(data))
    return {status:json["status"],message:json["message"],data:json["data"]}
  }
}
