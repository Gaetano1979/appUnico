import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActualizadoComponent } from './actualizado/actualizado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { PAGINAS_ROUTES } from './paginas.routes';
import { APP_ROUTES } from '../../../app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { ClienteComponent } from './cliente.component';
import { TodosComponent } from './todos/todos.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormsModule,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ComentariosComponent } from '../../comentarios/comentarios.component';


@NgModule({
  declarations: [
    ClienteComponent,
    ActualizadoComponent,
    NuevoComponent,
    TodosComponent,
    DetalleComponent,
    ComentariosComponent
    ],
  imports: [
    CommonModule,
    APP_ROUTES,
    PAGINAS_ROUTES,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ClienteComponent,
    ActualizadoComponent,
    NuevoComponent,
  ]
})
export class ClienteModule { }
