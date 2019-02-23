import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comentarios } from '../model/comentarios.model';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http:HttpClient) { }

  sendComentario(comentario:Comentarios,id:string){
    const headers= new HttpHeaders({
      'Conten-Type':'application/x-www-form-urlencoded'
    });
    return this.http.post(`https://servizio.herokuapp.com/comentarios/${id}`,comentario,{ headers});
    // return this.http.post(`http://localhost:3000/comentarios/${id}`,comentario,{ headers});
  }
}
