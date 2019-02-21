import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Comentarios } from '../../model/comentarios.model';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})

export class ComentariosComponent implements OnInit {
  @ViewChild('comentario') comentarioTexto:ElementRef;

  id:string;

  comentario:Comentarios;
  txtComentario:FormGroup;


  constructor(private Id:ActivatedRoute) {
    this.Id.params.subscribe(id=>{
      this.id=id.id;

      console.log(id);
    });
   }
  
  ngOnInit() {
   this.comentarioTexto.nativeElement.focus();
   const comentariotxt=this.comentarioTexto.nativeElement.value;
   this.txtComentario=new FormGroup({
     id:new FormControl(this.id,Validators.required),
     comentario:new FormControl(comentariotxt,Validators.required)
   });
  }

  PostComentario(){
    // this.txtComentario.comentario.value=this.comentarioTexto.nativeElement.value;
    
    console.log(this.txtComentario.value);
  }

}
