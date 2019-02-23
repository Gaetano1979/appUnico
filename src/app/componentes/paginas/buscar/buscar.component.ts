import { Component, OnInit } from '@angular/core';
import { UnicoService } from '../../../services/unico.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  dato:any;
  cliente:any;
  

  constructor(private unico:UnicoService, private router:Router) {

    // // tslint:disable-next-line:no-shadowed-variable
    // this.router.events.subscribe(data=>{
    //   console.log(data);
      
    // });

    // // tslint:disable-next-line:no-shadowed-variable
    // this.unico.getObs().subscribe(data=>{
    //   console.log(data);
      
    // });
    

    // this.dato=this.unico.getBuscarLocal();
    // console.log(this.dato);
    // const data=new Observable(newdata=>{
    //   newdata.next(this.dato);
    // });


    // data.subscribe((prova:any)=>{
    //   console.log(prova.resultado.nome);
    //   this.cliente=prova.resultado.nome;
      
    // });
    // this.unico.setObj()
    this.unico.getObj2();
    this.unico.getObs().subscribe(data=>{
      console.log(data);

    });

    
    
    
    // console.log(this.dato);
    
   }

  ngOnInit() {
    console.log('pagina Buscar');

  }

}
