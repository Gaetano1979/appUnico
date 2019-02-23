import { Component, OnInit } from '@angular/core';
import { UnicoService } from 'src/app/services/unico.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  zonas2:any[]=[];
  cargado=false;
  cargadoZona=false;

  clientesCiudad:any[]=[];
  clientesZonas:any[]=[];
  dataService:any[]=[];
  prova: any;
  nombre:any;
  itemProva:any;
  clientes: any[] = [];
  ciudades: any[] = [];
  zonas: any[] = [];
  zonasprova:any[]=[];

  ciudad: any[] = [];
  zona: any[] = [];
  provaArr:any[]=[];
  // provas zonas
  prima:any[]=[];
  seconda:any[]=[];

  itemLocal:string;

  provazona:any[]=[];

  constructor(private unico: UnicoService,private router:Router) {
    this.getDatosClientes();
    
    
    
    // localStorage.clear();
   }

  ngOnInit() {

    this.itemLocal=localStorage.getItem('ciudad');
    if(!this.itemLocal || this.itemLocal.length===0){
      this.itemLocal='Selectiona la Ciudad';
    }
    
  }

   getDatosClientes() {   
    this.prova = this.unico.getDatosClientes().subscribe((data: any) => {
      this.clientes =  data.data;
      console.log(data);
      console.log(this.clientes);
      this.clientes.forEach(cliente => {

        this.ciudad.push((cliente.ciudad).trim());
        this.zona.push((cliente.zona).trim());

        this.ciudades = this.ciudad.filter( ( ciu , i ) => {         
          return this.ciudad.indexOf(ciu) === i;
        });
        this.zonas = this.zona.filter((zon, i ) => {
          return this.zona.indexOf(zon) === i;
        });
      });

      this.cargado=true;

      if(localStorage.getItem('ciudad')){
        this.onEvent(this.itemLocal);
      }

      
      
      
      console.log({
        ciudades:this.ciudades,
        zonas:this.zonas
      });
      

      
    },err=>{
      console.log(err);
    });
  }

  provaarreglo(ciudad:string,arreglo:any[]){
    if (this.provazona.length>0) {
      console.log('this.provazona viene passato per new Array');
      
      this.provazona=new Array();
      arreglo.forEach(ciu=>{
        if(ciudad===(ciu.ciudad).trim()){
          this.provazona.push((ciu.zona.trim()));
        }
      });
      this.zonasprova=this.provazona.filter((zon,i)=>{
        return this.provazona.indexOf(zon)===i;
      });
    }else{
      arreglo.forEach(ciu=>{
        if(ciudad===(ciu.ciudad).trim()){
          this.provazona.push((ciu.zona).trim());
        }
      });
      this.zonasprova=this.provazona.filter((zon,i)=>{
        return this.provazona.indexOf(zon)===i;
      });
    }
  }


  onEvent(item:any,item2?:any){
      console.log(item);
      if(item){
        localStorage.setItem('ciudad',item);
      }
      console.log(item2);
      if(item2===undefined){
        console.log(item);    
        this.provaarreglo(item,this.clientes);   
        console.log(this.zonasprova);
         
      }else{
        console.log(item,item2);        
      }

      if(this.clientesCiudad.length>0){
        this.clientesCiudad=new Array();
        this.clientes.forEach(cliente=>{
          if ((cliente.ciudad).trim()===item) {            
            this.clientesCiudad.push(cliente);
          }
        });
      }else{
        this.clientes.forEach(cliente=>{
          if ((cliente.ciudad).trim()===item) {            
            this.clientesCiudad.push(cliente);
          }
        });

      }
      this.clientesZonas=this.clientesCiudad.filter(cliente=>{
        this.cargadoZona=true;
        return (cliente.zona).trim()===item2;
        
      });
      if (this.clientesZonas.length===0) {
        this.dataService=this.clientesCiudad;
      } else {
        this.dataService=this.clientesZonas;
        
      }

      // console.log(this.clientesCiudad);
      // console.log(this.clientesZonas);
      
      

  }
  cliente(item:any) {
    this.itemProva=item;
    // console.log(this.itemProva.cliente);
    this.nombre=item.cliente;
    console.log(this.nombre);
    
    // this.router.navigate(['/facturas',item.id]);
    // this.unico.setCliente(this.itemProva);        
  }
  get(){
    this.router.navigate(['/facturas',this.itemProva.id]);
    this.unico.setCliente(this.itemProva);
    return this.itemProva;

  }

}
