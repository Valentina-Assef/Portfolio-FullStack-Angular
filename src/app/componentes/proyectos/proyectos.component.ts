import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
  // Esto es para traer distintos datos
  proyectos : any = []

  constructor(private datos: PortfolioService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(portfolio => {
      this.proyectos=portfolio.proyectos;
    });
  }
}
