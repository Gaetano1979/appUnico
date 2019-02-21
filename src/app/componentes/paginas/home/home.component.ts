import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  forma:FormGroup;
  message='';
  modal=HTMLButtonElement;
  // modal=HTMLElement;


  constructor(private activate:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.forma=new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    });
  }

  login(){
    console.log('el valor de la forma es: ',this.forma.value.email);
    if (this.forma.value.email==='gaetano.sabino@gmail.com') {
      this.router.navigate(['cliente']);
      }else{
           
          this.message='Usuario no encontrado';
          console.log(this.message);    
       

      }
    
    
  }

}
