import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bannerdashboard',
  templateUrl: './bannerdashboard.component.html',
  styleUrls: ['./bannerdashboard.component.css']
})

export class BannerdashboardComponent implements OnInit {
  formBanner: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formBanner= this.formBuilder.group({
      imagen:['', [Validators.required]],
      nombre:['', [Validators.required]],
      titulo:['', [Validators.required]],
    })
  }

  ngOnInit(): void { }
  get Imagen(){
    return this.formBanner.get("imagen");
   }
  
   get ImagenInvalid(){
     return this.Imagen?.touched && !this.Imagen?.valid;
   }
  
   get Nombre(){
     return this.formBanner.get("nombre");
   }
  
   get NombreInvalid(){
     return this.Nombre?.touched && !this.Nombre?.valid;
   }

   get Titulo(){
    return this.formBanner.get("titulo");
  }
 
  get TituloInvalid(){
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  //Funcion
  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
  
    if (this.formBanner.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.formBanner.markAllAsTouched();
      alert("Ups!! Algo salió mal. El formulario no se enviará")
    }
  }
}