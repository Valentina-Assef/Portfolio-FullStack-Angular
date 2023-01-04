import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {
  //Para inicializar variable de instancia
  nombre: string = '';
  apellido: string = '';
  titulo: string = '';

  constructor(
    //Inyectar el servicio para tener acceso, en la clase, a los metodos
    private datos: PortfolioService) { }

    ngOnInit(): void {
      //Para almacenar los datos que vienen del servicio
      this.datos.getDatos().subscribe(portfolio => {
        this.nombre=portfolio.nombre;
        this.apellido=portfolio.apellido;
        this.titulo=portfolio.titulo;
      });
    }
}
