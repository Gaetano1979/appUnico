import { Component, OnInit } from '@angular/core';
import { UnicoService } from 'src/app/services/unico.service';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from '../../../services/email.service';

@Component({
  selector: 'app-recibos',
  templateUrl: './recibos.component.html',
  styleUrls: ['./recibos.component.css']
})
export class RecibosComponent implements OnInit {
  forma:FormGroup;
  reciboemial:object={
    destinario:'gaetano.sabino@gmail.com'
  };
  email:FormGroup;
  mensaje:any;

  fattura:any;
  cliente:any;

  constructor(private unico: UnicoService,private Email:EmailService, private router: Router) {
    // console.log(this.unico.getFattura());
    this.fattura=this.unico.getFattura();
    this.cliente=this.unico.getCliente();
    console.log({
      cliente:this.cliente,
      fattura:this.fattura
    });    
   }

  ngOnInit() {
    this.forma=new FormGroup({
        cantidad:new FormControl(this.fattura.Saldo,Validators.required),
        documento: new FormControl('',Validators.required),
        responsable: new FormControl('',Validators.required),
        paga_con: new FormControl('Contado',Validators.required),
        idfactura: new FormControl(this.fattura.Id_Factura,Validators.required),
        fecha_pag: new FormControl('',Validators.required),
        idcliente: new FormControl(this.cliente.id,Validators.required),
        idcaja:new FormControl(23),
        cliente:new FormControl(this.cliente.cliente),
        fattura:new FormControl((this.fattura.Documento).trim()),
        destinario:new FormControl(this.cliente.email || 'gaetano.sabino@gmail.com'),
        subject:new FormControl(`Envio documento`),
        saldo:new FormControl(this.fattura.Saldo),
        zona:new FormControl(this.cliente.zona),
        observaciones:new FormControl('No hay observaciones ')
    });
  }
  postRecibo(){
    console.log(this.forma.value);
    
    const recibo=this.forma.value;
    this.unico.postRecibo(recibo,'nuevo').subscribe((data:any)=>{
      console.log(data);
      if (data.conferma) {
        this.router.navigate(['facturas',this.cliente.id]); 
        // this.sendEmail();
        
      }      
    });
    
  }
  sendEmail(){
    console.log(this.forma.value);

    const recibo1=this.forma.value;

    this.Email.sendEmail(recibo1).subscribe((data:any)=>{
      console.log(data);
      if(data.ok===true){
        // console.log('Email enviado');
        this.mensaje='Email enviado';
        this.postRecibo();
        // setTimeout(() => {
        //   this.router.navigate(['facturas',this.cliente.id]); 
        // }, 1500);        
      }      
    },err=>{
      console.log(err);
      this.mensaje=err;
      
    });
    
  }

}
