import { Component, OnInit } from '@angular/core';
import { UnicoService } from 'src/app/services/unico.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  idpara: string;
  facturas:any[]=[];
  recibos:any[]=[];
  cliente:any={};
  nombre:string;

  constructor(private unico: UnicoService,private para: ActivatedRoute,private router: Router) {
    this.para.params.subscribe(parametro=>{
      console.log(parametro.id);
      this.idpara=parametro.id;      
      this.getDatos(this.idpara);
    });
    console.log(this.nombre);
    this.cliente=this.unico.getCliente();
    console.log(this.cliente);
    
    
    // this.nombre=this.unico.getCliente();
   }

  ngOnInit() {
  }

  getDatos(id: string){
    this.unico.getFacturasPorId(id).subscribe((data: any) => {
      console.log(data.data,'data');
      this.facturas=data.data;
    });
    // this.cliente=this.unico.getCliente();
  }
  guardar(data:any){
    console.log(data);
    localStorage.setItem('fattura',JSON.stringify(data));
    
  }
  idrecibo(item:any){
    console.log(item);
    localStorage.setItem('recibo',JSON.stringify(item));
    // this.unico.deleteRecibo(item.id).subscribe((data:any)=>{
    //   console.log(data);
    //   if (data.ok===true) {
    //     this.getDatos(this.idpara);
    //   }
      
    // });
    
  }

  cancelarRecibo(){
    const recibo=JSON.parse(localStorage.getItem('recibo'));
    const id=recibo.id;
    this.unico.deleteRecibo(id).subscribe((data:any)=>{
        if (data.ok===true) {
          this.getDatos(this.idpara);
        }
    });
  }

  



}
