import { Injectable } from '@angular/core';
//Para suscribirse a los datos y que reciba respuesta de forma asincronica
import { Observable } from 'rxjs';
//Para hacer peticiones
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  //El primer http se llama alias
  constructor(private http:HttpClient) { }

  //metodo Observable que devuelve datos
  getDatos():Observable<any> {
    //Llama a la base de datos JSON o a una URL
    return this.http.get('./assets/json/portfolio.json');
  }
}