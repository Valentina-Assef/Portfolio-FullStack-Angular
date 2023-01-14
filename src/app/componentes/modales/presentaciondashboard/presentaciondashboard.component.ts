import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-presentaciondashboard',
  templateUrl: './presentaciondashboard.component.html',
  styleUrls: ['./presentaciondashboard.component.css']
})
export class PresentaciondashboardComponent implements OnInit  {
  formPresentacion: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formPresentacion= this.formBuilder.group({
      foto:['', [Validators.required]],
      acerca:['', [Validators.required]],
    })
  }

  ngOnInit(): void {}

  get Foto(){
    return this.formPresentacion.get("foto");
   }
  
   get FotoInvalid(){
     return this.Foto?.touched && !this.Foto?.valid;
   }
  
   get Acerca(){
     return this.formPresentacion.get("acerca");
   }
  
   get AcercaInvalid(){
     return this.Acerca?.touched && !this.Acerca?.valid;
   }

   //Funcion
   onEnviar(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
  
    if (this.formPresentacion.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.formPresentacion.markAllAsTouched();
      alert("Ups!! Algo salió mal. El formulario no se enviará")
    }
  }
}
