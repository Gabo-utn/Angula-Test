import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarArticuloComponent } from './agregar-articulo/agregar-articulo.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent // es para que me cargue primero el componente
  },
  {
    path: 'perfil', component:PerfilComponent
  },
  {
    path: 'articulo-detalle', component:ArticuloDetalleComponent
  },
  {
path: 'agregar-articulo', component:AgregarArticuloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
