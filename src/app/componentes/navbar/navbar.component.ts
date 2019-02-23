import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UnicoService } from '../../services/unico.service';
import { Routes, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private unico:UnicoService,private router:Router) { }

  ngOnInit() {
  }



  buscar(termino:any){
    console.log(termino);
    // const data=termino;
    
    this.unico.getBuscar(termino).subscribe((dato:any)=>{
      console.log(dato);
      this.unico.setBuscar(dato);
      this.unico.setObj(dato);
      
      
    });
    
  }


}
