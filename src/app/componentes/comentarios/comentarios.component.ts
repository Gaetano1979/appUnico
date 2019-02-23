import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Comentarios } from '../../model/comentarios.model';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ComentariosService } from '../../services/comentarios.service';
import Swat from 'sweetalert2';
@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})

export class ComentariosComponent implements OnInit {
  @ViewChild('comentario') TextArea:ElementRef;

  id:string;

  comentario:Comentarios;
  txtComentario:FormGroup;


  constructor(private Id:ActivatedRoute,private comentarioService:ComentariosService) {
    this.Id.params.subscribe(id=>{
      this.id=id.id;

      console.log(id);
      
    });
  }
  
  ngOnInit() {
    
    this.TextArea.nativeElement.focus();
    this.txtComentario=new FormGroup({
      id:new FormControl(this.id,Validators.required),
      comentario:new FormControl('',[Validators.required,Validators.minLength(5)]),
      fecha:new FormControl(new Date())
      });
  }
  
  PostComentario(){
    // const comentariotxt=this.TextArea.nativeElement.value;
    // this.txtComentario.controls[comentario]=comentariotxt;
    const comentario=this.txtComentario.value;
    if (this.txtComentario.invalid) {
      return;
    } else {
      
      console.log(this.txtComentario.value);
      this.comentarioService.sendComentario(comentario,this.id).subscribe((data:any)=>{
        console.log(data);
        if (data.ok===true) {
          Swat('Comentario','Comentario enviado corectamente','success');
          
          this.TextArea.nativeElement.focus();
          
        } else {
          Swat('Error',data.err,'error');
          this.TextArea.nativeElement.focus();
          
        }
        
        // this.Swat.show();
        
        
        
      });
      this.txtComentario.reset({
        id:this.id,
        comentario:'',
        fecha:new Date()
      });
      // return;
    }
   
    // if(this.txtComentario.invalid){
    //   this.TextArea.nativeElement.blur();
    //   return;
    // }else{
    //   this.comentarioService.sendComentario(comentario,this.id).subscribe(data=>{
    //     console.log(data);   
    //     this.TextArea.nativeElement.blur();
    //   });
    //   this.txtComentario.reset();
      
      
    // }
    
    
    // console.log(this.txtComentario.value);
  }

}
