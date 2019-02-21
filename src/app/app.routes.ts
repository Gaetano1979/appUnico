import { Routes, RouterModule } from '@angular/router';

// rutas de pagina
import { HomeComponent } from './componentes/paginas/home/home.component';
import { ClienteComponent } from './componentes/paginas/cliente/cliente.component';
import { FacturasComponent } from './componentes/paginas/facturas/facturas.component';
import { RecibosComponent } from './componentes/paginas/recibos/recibos.component';
import { BuscarComponent } from './componentes/paginas/buscar/buscar.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'home', component: HomeComponent },
    { path: 'clientes', component: ClienteComponent },
    { path: 'facturas/:id', component: FacturasComponent},
    { path: 'buscar', component: BuscarComponent},

       
    { path: 'recibos/:id', component: RecibosComponent },

    // { path: 'recibos', component: RecibosComponent },
    // { path: '', redirectTo: '/home', pathMatch: 'full' },

    // { path: '**', redirectTo: '/home', pathMatch: 'full' }
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash : true});
