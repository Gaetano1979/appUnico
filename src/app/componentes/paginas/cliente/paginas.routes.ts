import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ActualizadoComponent } from './actualizado/actualizado.component';
import { TodosComponent } from './todos/todos.component';
import { DetalleComponent } from './detalle/detalle.component';

const paginasRoutes: Routes = [

    {path: 'cliente', component : ClienteComponent,
    children: [
        {path: 'nuevo', component: NuevoComponent},
        {path: '', component: TodosComponent},

        {path: 'actualizar', component: ActualizadoComponent},
        {path: 'clientes', component: TodosComponent},
        {path: 'detalle/:id',component: DetalleComponent},

        {path: '**', redirectTo: 'cliente', pathMatch: 'full'}

    ]
}
];


export const PAGINAS_ROUTES = RouterModule.forChild(paginasRoutes);
