import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario = new Usuario();
  constructor() {

    this.usuario.usuarioId = 1;

    this.usuario.nombres = 'tomas';
    this.usuario.apellidos = 'garay';


  }
}
