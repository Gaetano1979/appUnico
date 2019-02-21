import { Component, OnInit } from '@angular/core';
import { UnicoService } from '../../../services/unico.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  dato:any;

  constructor(private unico:UnicoService) {

    this.dato=this.unico.getBuscarLocal();
    console.log(this.dato.resultado);
    
   }

  ngOnInit() {
  }

}
