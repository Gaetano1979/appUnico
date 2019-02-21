import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators, FormArray } from '@angular/forms';
import { Cliente } from '../../../../interfaces/cliente';
import { UnicoService } from '../../../../services/unico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizado',
  templateUrl: './actualizado.component.html',
  styleUrls: ['./actualizado.component.css']
})
export class ActualizadoComponent implements OnInit {

  forma:FormGroup;
  clienteStorage:any;
  cliente:Cliente={
    codigo:'',
    cliente:'',
    ciudad:'',
    dni:'',
    email:'',
    contacto:'',
    direccion:'',
    cellular:0,
    ruc:'',
    telefono1:0,
    telefono2:0,
    zona:'',
    dia:'',
    direccion2:'',
    vendedor:''
  };
  messageActualizacion:string;
  

  constructor(private unico:UnicoService,private router:Router) {
    this.getCliente();
   }

  ngOnInit() {
    this.forma=new FormGroup({
      cliente : new FormArray([
        new FormControl(((this.clienteStorage.cliente).trim()),[Validators.required]),
        new FormControl((this.clienteStorage.Dni),Validators.required),
        new FormControl((this.clienteStorage.Ruc).trim(),Validators.required),
        new FormControl((this.clienteStorage.ciudad).trim(),Validators.required),
        new FormControl((this.clienteStorage.zona).trim(),Validators.required),
        new FormControl((this.clienteStorage.direccion).trim(),Validators.required),
        new FormControl((this.clienteStorage.telefono).trim(),Validators.required),
        new FormControl((this.clienteStorage.cellulare).trim(),Validators.required),
        new FormControl((this.clienteStorage.correo).trim(),Validators.required),





        new FormControl(this.clienteStorage.id)

      ])

    }
    );

    //   cliente: new FormArray(this.cliente.cliente,[Validators.required,Validators.minLength(5)]),
    //   email: new FormControl('',[Validators.required,Validators.minLength(5)]),
    //   cellular: new FormControl('',[Validators.required,Validators.minLength(5)]),
    //   direccion: new FormControl('',[Validators.required,Validators.minLength(5)]),
    //   ruc: new FormControl('',[Validators.required,Validators.minLength(5)]),
    //   telefono1: new FormControl('',[Validators.required,Validators.minLength(5)]),
    //   zona: new FormControl('',[Validators.required,Validators.minLength(5)]),
    //   ciudad: new FormControl('',[Validators.required,Validators.minLength(5)]),


    // });
  }

  guardar(){
    console.log(this.forma);  
    console.log(this.forma.value);   
    this.unico.putcliente(this.forma.value).subscribe((data:any)=>{
      console.log(data);
      if (data.resultado.affectedRows) {
        this.messageActualizacion='Cliente actualizado';
        setTimeout(()=>{
            this.router.navigate(['cliente']);
        },1500);
      }
      
    },err=>{
      console.log(err);
      
    });
    
  }
  getCliente(){
    this.clienteStorage=this.unico.getCliente();
    console.log(this.clienteStorage);
    
  }

}
