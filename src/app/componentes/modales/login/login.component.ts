import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder){ 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit() {}
//Metodos (toma datos para usarlos)
  get Mail(){
   return this.form.get("email");
  }

  get Password(){
    return this.form.get("password");
  }

  get PasswordInvalid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailInvalid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  //Funcion
  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
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
