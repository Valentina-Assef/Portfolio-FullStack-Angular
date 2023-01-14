import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experienciadashboard',
  templateUrl: './experienciadashboard.component.html',
  styleUrls: ['./experienciadashboard.component.css']
})

export class ExperienciadashboardComponent implements OnInit {
  formExperiencia: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formExperiencia= this.formBuilder.group({
      logo:['', [Validators.required]],
      puesto:['', [Validators.required]],
      periodo:['', [Validators.required]],
      descripcion:['', [Validators.required]],
    })
  }
      
  ngOnInit(): void {}
  
  get Logo(){
    return this.formExperiencia.get("logo");
   }
  
   get LogoInvalid(){
     return this.Logo?.touched && !this.Logo?.valid;
   }

   get Puesto(){
    return this.formExperiencia.get("puesto");
  }
 
  get PuestoInvalid(){
    return this.Puesto?.touched && !this.Puesto?.valid;
  }

  get Periodo(){
    return this.formExperiencia.get("periodo");
  }
 
  get PeriodoInvalid(){
    return this.Periodo?.touched && !this.Periodo?.valid;
  }

  get Descripcion(){
    return this.formExperiencia.get("descripcion");
  }
 
  get DescripcionInvalid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }
  
   //Funcion
   onEnviar(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
  
    if (this.formExperiencia.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.formExperiencia.markAllAsTouched();
      alert("Ups!! Algo salió mal. El formulario no se enviará")
    }
  }
}

