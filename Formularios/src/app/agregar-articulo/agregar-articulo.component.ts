import { Articulo } from './../models/articulo';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.scss']
})
export class AgregarArticuloComponent implements OnInit {
  usuarios: Array<User> = new Array<User>();
  formularioArticulo: FormGroup;
  articulo: Articulo = new Articulo();
  constructor(
    private ArticuloInyectado: ArticulosService,
    private fbGenerador:FormBuilder
  ) { }

  ngOnInit(): void {
    this.formularioArticulo = this.fbGenerador.group({
      title:['',Validators.required],
      body:['',Validators.required],
      userId:['',Validators.required],
    })


    this.ArticuloInyectado.leerTodosLosUsuarios().subscribe((usuariosRecibidos)=>{
      this.usuarios = usuariosRecibidos;
    })
  }


    agregar(){
      this.articulo = this.formularioArticulo.value as Articulo;
      this.ArticuloInyectado.guardarArticulo(this.articulo).subscribe((articuloRecibido)=>{
        console.log('Fleicidades');
        this.formularioArticulo.reset();

      })
    }
}
