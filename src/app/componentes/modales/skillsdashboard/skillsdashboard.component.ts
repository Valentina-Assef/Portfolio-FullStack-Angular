import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skillsdashboard',
  templateUrl: './skillsdashboard.component.html',
  styleUrls: ['./skillsdashboard.component.css']
})

export class SkillsdashboardComponent implements OnInit {
  formSkills: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formSkills= this.formBuilder.group({
      skill:['', [Validators.required]],
      porcentaje:['', [Validators.required, Validators.min(0), Validators.max(100)]],
    })
  }
      
  ngOnInit(): void {}
  
  get Skill(){
    return this.formSkills.get("skill");
   }
  
   get SkillInvalid(){
     return this.Skill?.touched && !this.Skill?.valid;
   }

   get Porcentaje(){
    return this.formSkills.get("porcentaje");
  }
 
  get PorcentajeInvalid(){
    return this.Porcentaje?.touched && !this.Porcentaje?.valid;
  }

   //Funcion
   onEnviar(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
  
    if (this.formSkills.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.formSkills.markAllAsTouched();
      alert("Ups!! Algo salió mal. El formulario no se enviará")
    }
  }
}
