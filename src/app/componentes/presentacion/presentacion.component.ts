import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})

export class PresentacionComponent implements OnInit {
  // Esto es para traer distintos datos
  img_perfil: string = '';
  titulo_acerca: string = '';
  acerca1: string = '';
  acerca2: string = '';
  acerca3: string = '';

 constructor(private datos: PortfolioService) { }

    ngOnInit(): void {
      this.datos.getDatos().subscribe(portfolio => {
        this.img_perfil=portfolio.img_perfil;
        this.titulo_acerca=portfolio.titulo_acerca;
        this.acerca1=portfolio.acerca1;
        this.acerca2=portfolio.acerca2;
        this.acerca3=portfolio.acerca3;
      });
    }
}