import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursosdashboard',
  templateUrl: './cursosdashboard.component.html',
  styleUrls: ['./cursosdashboard.component.css']
})

export class CursosdashboardComponent implements OnInit {
  formCursos: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formCursos= this.formBuilder.group({
      titulo:['', [Validators.required]],
      periodo:['', [Validators.required]],
      institucion:['', [Validators.required]],
    })
  }
      
  ngOnInit(): void {}
  
  get Titulo(){
    return this.formCursos.get("titulo");
   }
  
   get TituloInvalid(){
     return this.Titulo?.touched && !this.Titulo?.valid;
   }
  
   get Periodo(){
     return this.formCursos.get("periodo");
   }
  
   get PeriodoInvalid(){
     return this.Periodo?.touched && !this.Periodo?.valid;
   }

   get Institucion(){
    return this.formCursos.get("institucion");
  }
 
  get InstitucionInvalid(){
    return this.Institucion?.touched && !this.Institucion?.valid;
  }
  
   //Funcion
   onEnviar(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
  
    if (this.formCursos.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.formCursos.markAllAsTouched();
      alert("Ups!! Algo salió mal. El formulario no se enviará")
    }
  }
}
