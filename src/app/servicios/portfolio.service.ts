import { Injectable } from '@angular/core';
//Para suscribirse a los datos y que reciba respuesta asincrona
import { Observable } from 'rxjs';
//Para hacer peticiones y CRUD
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  //http = alias
  constructor(private http:HttpClient) { }
}