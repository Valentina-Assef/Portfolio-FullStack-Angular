import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-redesdashboard',
  templateUrl: './redesdashboard.component.html',
  styleUrls: ['./redesdashboard.component.css']
})

export class RedesdashboardComponent implements OnInit {
  // Esto es para traer distintos datos
  botones1 : any = [];
  formRedes: FormGroup;

  constructor(private datos: PortfolioService, private formBuilder: FormBuilder) {
    this.formRedes= this.formBuilder.group({
      icono:['', [Validators.required]],
      link:['', [Validators.required]],
    })
  }
      
  ngOnInit(): void {
    this.datos.getDatos().subscribe(portfolio => {
      this.botones1=portfolio.botones1;
    }) 
  }
  
  get Icono(){
    return this.formRedes.get("icono");
   }
  
   get IconoInvalid(){
     return this.Icono?.touched && !this.Icono?.valid;
   }
  
   get Link(){
     return this.formRedes.get("link");
   }
  
   get LinkInvalid(){
     return this.Link?.touched && !this.Link?.valid;
   }
  
   //Funcion
   onEnviar(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
  
    if (this.formRedes.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.formRedes.markAllAsTouched();
      alert("Ups!! Algo salió mal. El formulario no se enviará")
    }
  }
}