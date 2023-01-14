import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proyectosdashboard',
  templateUrl: './proyectosdashboard.component.html',
  styleUrls: ['./proyectosdashboard.component.css']
})

export class ProyectosdashboardComponent implements OnInit {
  formProyectos: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formProyectos= this.formBuilder.group({
      foto:['', [Validators.required]],
      titulo:['', [Validators.required]],
      descripcion:['', [Validators.required]],
    })
  }

  ngOnInit(): void { }
  get Foto(){
    return this.formProyectos.get("foto");
   }
  
   get FotoInvalid(){
     return this.Foto?.touched && !this.Foto?.valid;
   }
  
   get Titulo(){
    return this.formProyectos.get("titulo");
  }
 
  get TituloInvalid(){
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get Descripcion(){
    return this.formProyectos.get("descripcion");
  }
 
  get DescripcionInvalid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }

  //Funcion
  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
  
    if (this.formProyectos.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.formProyectos.markAllAsTouched();
      alert("Ups!! Algo salió mal. El formulario no se enviará")
    }
  }
}