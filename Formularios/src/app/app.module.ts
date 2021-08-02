import { ArticulosService } from './services/articulos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from './services/usuario.service';
import { HomeComponent } from './home/home.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import{HttpClientModule} from '@angular/common/http';
import { AgregarArticuloComponent } from './agregar-articulo/agregar-articulo.component';
@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    EncabezadoComponent,
    PerfilComponent,
    ArticuloDetalleComponent,
    AgregarArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    UsuarioService,
    ArticulosService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
