import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-idiomasdashboard',
  templateUrl: './idiomasdashboard.component.html',
  styleUrls: ['./idiomasdashboard.component.css']
})

export class IdiomasdashboardComponent implements OnInit {
  formIdiomas: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formIdiomas= this.formBuilder.group({
      idioma:['', [Validators.required]],
      nivel:['', [Validators.required]],
      porcentaje:['', [Validators.required, Validators.min(0), Validators.max(100)]],
    })
  }
      
  ngOnInit(): void {}
  
  get Idioma(){
    return this.formIdiomas.get("idioma");
   }
  
   get IdiomaInvalid(){
     return this.Idioma?.touched && !this.Idioma?.valid;
   }
  
   get Nivel(){
     return this.formIdiomas.get("nivel");
   }
  
   get NivelInvalid(){
     return this.Nivel?.touched && !this.Nivel?.valid;
   }

   get Porcentaje(){
    return this.formIdiomas.get("porcentaje");
  }
 
  get PorcentajeInvalid(){
    return this.Porcentaje?.touched && !this.Porcentaje?.valid;
  }

   //Funcion
   onEnviar(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
  
    if (this.formIdiomas.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.formIdiomas.markAllAsTouched();
      alert("Ups!! Algo salió mal. El formulario no se enviará")
    }
  }
}