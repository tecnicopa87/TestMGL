import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ComprasComponent } from './compras/compras.component';


const routes: Routes = [
  {path:'clientes',component:ClientesComponent},
  {path:'tienda',component:TiendaComponent},
  {path:'compras',component:ComprasComponent},
  {path:'**',pathMatch:'full',redirectTo:'clientes'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
