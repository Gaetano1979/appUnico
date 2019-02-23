import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UnicoService {
  
  cliente:any={};
  dato:Observable<any>;
  fattura:any;
  nombre:string=localStorage.getItem('nombre');

  constructor(private http: HttpClient, private router:Router) { }

  // servicio interno
  setCliente(item:any){
    this.cliente=item;  
    localStorage.setItem('cliente',JSON.stringify(item));
  } 
  // termino buscado
  setBuscar(dato:any){
    localStorage.setItem('buscar',JSON.stringify(dato));
    
  }

  getBuscarLocal(){
    
    return this.dato=JSON.parse(localStorage.getItem('buscar')); 
    
  }
  setFattura(data:any){
    
    this.fattura=localStorage.setItem('fattura',JSON.stringify(data));
  }

  setObj(datalocal:any){
    
    const Data=localStorage.setItem('buscar',JSON.stringify(datalocal));
    return new Observable(data=>{
      data.next(datalocal);
      // console.log(data);
      
    });
  }

  getObj2(){
    const Data=JSON.parse(localStorage.getItem('buscar')); 
    
    this.setObj(Data).subscribe(data=>{
      return data;
    });
     
    
  }

  getObs(){

    this.dato=JSON.parse(localStorage.getItem('buscar')); 
    
    return new Observable(data=>{
      data.next(this.dato);
      console.log(data);
      
    });
    
    
  }

  

  getFattura(){
    return this.fattura=JSON.parse(localStorage.getItem('fattura'));
  }

  getBuscar(termino:string){
    this.router.navigate(['buscar']);
    console.log('servizio getclientes aperto');
    const headers= new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded',
      termino
    });

    return this.http.get(`https://servizio.herokuapp.com/buscar`, {headers} );
  }

  getCliente(){
    return this.cliente=JSON.parse(localStorage.getItem('cliente'));
  }

  putcliente(cliente:any){
    const headers= new HttpHeaders({
      'Conten-Type':'application/x-www-form-urlencoded'
    });
    return this.http.put(`https://servizio.herokuapp.com/cliente`,cliente,{ headers});
    
  }


// Lista total de los clientes
  getDatosClientes() {
    console.log('Clientes Descargados');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded'
    });
    return this.http.get(`https://servizio.herokuapp.com/clienteTot`, { headers });
  }

  getFacturasPorId(id:string){
    console.log('Clientes Descargados');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded'
    });
    return this.http.get(`https://servizio.herokuapp.com/cliente/${id}`, { headers });
  }

  postRecibo(recibo:any,id:string){
    const headers= new HttpHeaders({
      'Conten-Type':'application/x-www-form-urlencoded'
    });
    return this.http.post(`https://servizio.herokuapp.com/check/${id}`,recibo,{ headers});
    // return this.http.post(`http://localhost:3000/check/${id}`,recibo,{ headers});
  }
  

  deleteRecibo(id:string){
    const headers= new HttpHeaders({
      'Conten-Type':'application/x-www-form-urlencoded'
    });
    return this.http.delete(`https://servizio.herokuapp.com/pagos/${id}`,{ headers});

  }
}
