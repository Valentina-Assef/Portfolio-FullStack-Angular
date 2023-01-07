import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  form: FormGroup;

   // Inyectar en el constructor el formBuilder
   constructor(private formBuilder: FormBuilder){ 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      nombre:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      asunto:['', [Validators.required]],
      mensaje:['', [Validators.required]],
   })
  }

  ngOnInit() {}
  //Metodos
  get Name(){
    return this.form.get("nombre");
   }

  get Mail(){
    return this.form.get("email");
  }

  get Subject(){
    return this.form.get("asunto");
   }

  get Message(){
    return this.form.get("mensaje");
   }
   

  //Funcion
  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched();
      alert("Ups!! Algo salió mal. El formulario no se enviará")
    }
  }
}
