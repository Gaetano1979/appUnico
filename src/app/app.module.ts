import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importaciones Rutas
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { PaginasModule } from './componentes/paginas/paginas.module';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BuscarComponent } from './componentes/paginas/buscar/buscar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuscarComponent,
  ],
  imports: [
    APP_ROUTES,
    BrowserModule,
    PaginasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
