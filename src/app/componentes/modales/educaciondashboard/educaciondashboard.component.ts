import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-educaciondashboard',
  templateUrl: './educaciondashboard.component.html',
  styleUrls: ['./educaciondashboard.component.css']
})

export class EducaciondashboardComponent implements OnInit {
  formEducacion: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formEducacion= this.formBuilder.group({
      titulo:['', [Validators.required]],
      periodo:['', [Validators.required]],
      institucion:['', [Validators.required]],
      localidad:['', [Validators.required]],
    })
  }
      
  ngOnInit(): void {}
  
  get Titulo(){
    return this.formEducacion.get("titulo");
   }
  
   get TituloInvalid(){
     return this.Titulo?.touched && !this.Titulo?.valid;
   }
  
   get Periodo(){
     return this.formEducacion.get("periodo");
   }
  
   get PeriodoInvalid(){
     return this.Periodo?.touched && !this.Periodo?.valid;
   }

   get Institucion(){
    return this.formEducacion.get("institucion");
  }
 
  get InstitucionInvalid(){
    return this.Institucion?.touched && !this.Institucion?.valid;
  }

  get Localidad(){
    return this.formEducacion.get("localidad");
  }
 
  get LocalidadInvalid(){
    return this.Localidad?.touched && !this.Localidad?.valid;
  }
  
   //Funcion
   onEnviar(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
  
    if (this.formEducacion.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.formEducacion.markAllAsTouched();
      alert("Ups!! Algo salió mal. El formulario no se enviará")
    }
  }
}
