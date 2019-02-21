import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// para usar los Forms 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// paginas
import { HomeComponent } from './home/home.component';
import { FacturasComponent } from './facturas/facturas.component';
import { ClienteComponent } from './cliente/cliente.component';
import { RecibosComponent } from './recibos/recibos.component';
import { ClienteModule } from './cliente/cliente.module';
import { APP_ROUTES } from '../../app.routes';
import { PAGINAS_ROUTES } from './cliente/paginas.routes';




@NgModule({
  declarations: [
    HomeComponent,
    FacturasComponent,
    RecibosComponent,
  ],
  imports: [
    CommonModule,
    ClienteModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTES,
    PAGINAS_ROUTES
  ],
  exports: [
    HomeComponent,
    FacturasComponent,
    ClienteComponent,
    RecibosComponent,

  ]
})
export class PaginasModule { }
