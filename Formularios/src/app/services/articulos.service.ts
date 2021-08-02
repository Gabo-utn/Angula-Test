import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  articulo: Articulo = new Articulo();


  constructor( private http:HttpClient) { }


  leerNoticias() : Observable <Articulo[]>
  {
     return this.http.get<Articulo[]>('https://jsonplaceholder.typicode.com/posts')
  }
  leerUsuario(userId:number) : Observable<User>
  {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users' + userId)
  }
  guardarArticulo(articulo:Articulo): Observable<Articulo>
  {
    return this.http.post<Articulo>('https://jsonplaceholder.typicode.com' + 'https://jsonplaceholder.typicode.com/posts',articulo)
  }
  leerTodosLosUsuarios(): Observable<User[]>
  {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com' + 'https://jsonplaceholder.typicode.com/users')
  }
  borrarArticulo(id:number)
  {
    return this.http.delete<any>('https://jsonplaceholder.typicode.com' + 'https://jsonplaceholder.typicode.com/posts/1' + id)
  }
  actualizarArticulo(articulo:Articulo): Observable<Articulo>
  {
    return this.http.put<Articulo>('https://jsonplaceholder.typicode.com' +  'https://jsonplaceholder.typicode.com/posts/1' + articulo.id,articulo)
  }


}
