import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface Usuario {
  nombre:string;
  correo:string;
  password:string;
}
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  formularioCreado: FormGroup; //no esta inizializado por lo tanto utilizo el signo ! para decir que es indefinido
  usuarios:Array<Usuario> = new Array<Usuario>();
  esNuevo: boolean = true ;
  posicionEditar: number = -1;

  constructor(private formBuilder: FormBuilder) {

   }

  ngOnInit(): void {

    this.crearFormulario();


  }
  crearFormulario(){ //aca creo el metodo para la creacion del formulacion con sus diferentes atributos
    this.formularioCreado = this.formBuilder.group({
      nombre: ['marta',Validators.required], //le paso un arreglo con un valaor inicila el cual es validado y requerido
      correo: [' ',Validators.compose([
        Validators.required,Validators.email //para decirle que debe estar en formato de correo
      ])], //el compose me da la estructura de saber como esta compuesto mi arreglo en este caso

      password:['',Validators.compose([Validators.required,Validators.minLength(8)])]// el minLength es para decir que esta teniendo
    })
  }
  agregar(){
    this.usuarios.push(this.formularioCreado.value as Usuario) // hago un push con lo que agregue de mi formulario
    this.formularioCreado.reset()
  }
  editar(){

    this.usuarios[this.posicionEditar].nombre = this.formularioCreado.value.nombre;
    this.usuarios[this.posicionEditar].correo = this.formularioCreado.value.correo;
    this.formularioCreado.reset(); //para que me lo deje vacio
    this.esNuevo = true;
    this.posicionEditar = -1;
  }
  editarUsuario(posicion:number){


      this.formularioCreado.setValue({
      nombre:this.usuarios[posicion].nombre,
      correo: this.usuarios[posicion].correo,
      password: this.usuarios[posicion].password
    })
    this.posicionEditar = posicion;
    this.esNuevo = false
  }
  eliminarUsuario(posicion:number){
    this.usuarios.splice(posicion,1)
  }


}
