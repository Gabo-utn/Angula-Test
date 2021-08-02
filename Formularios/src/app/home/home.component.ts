import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';
import { UsuarioService } from '../services/usuario.service';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articulos: Array<Articulo> = new Array<Articulo>();
  constructor(private router: Router,
              private UsuarioInyectado:UsuarioService,
              private ArticuloInyectado:ArticulosService,
              private Ruta:Router
  ) {

  }

  ngOnInit(): void {
    this.ArticuloInyectado.leerNoticias().subscribe((articulosDesdeApi)=>{
      this.articulos = articulosDesdeApi;
    });

    let articuloEnviar: Articulo = new Articulo();
    articuloEnviar.body = 'cuerpo del articulo ';
    articuloEnviar.title = 'Este es de prueba';
    articuloEnviar.usuarioId = 4;
    this.ArticuloInyectado.guardarArticulo(articuloEnviar).subscribe((articuloCreado)=>{
      this.articulos.push(articuloCreado)
    })





  }
  IrAlDetalle(articulo:Articulo){
    this.ArticuloInyectado.articulo = articulo;
    this.Ruta.navigateByUrl('articulo-detalle');

  }

  AgregarPersona(){
    const url = './agregar/';
    this.router.navigateByUrl(url);
  }

  borrar(id:number){
    this.ArticuloInyectado.borrarArticulo(id).subscribe((datos)=>{
      console.log(datos)
      console.log('eliminado correctamente')
    })
  }
  actualizar (articulo:Articulo) {
    articulo.title = 'este titulo esta editado';
    articulo.body = 'este es el cuerpo editado';
    this.ArticuloInyectado.actualizarArticulo(articulo).subscribe((articuloRecibido)=>{
      console.log(articuloRecibido)
    })
  }


}
