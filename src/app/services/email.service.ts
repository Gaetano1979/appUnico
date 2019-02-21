import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  sendEmail(recibo:any){
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.http.post(`https://servizio.herokuapp.com/emailprova`,recibo,{ headers});
  }
}
