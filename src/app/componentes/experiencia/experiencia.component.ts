import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  // Esto es para traer distintos datos
  experiencias : any = []

  constructor(private datos: PortfolioService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(portfolio => {
      this.experiencias=portfolio.experiencias;
    });
  }
}
