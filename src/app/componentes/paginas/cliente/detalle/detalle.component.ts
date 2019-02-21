import { Component, OnInit } from '@angular/core';
import { UnicoService } from '../../../../services/unico.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  cliente:any={};

  constructor(private unico: UnicoService) {
    this.getDatos();
    console.log((this.cliente.cellulare).trim().length);
   }

  ngOnInit() {
  }

  getDatos(){
    this.cliente=JSON.parse(localStorage.getItem('cliente'));
    console.log(this.cliente);
    
  }

}
