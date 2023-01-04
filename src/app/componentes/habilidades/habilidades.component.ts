import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {
  // Esto es para traer distintos datos
  habilidades : any = []
  skills : any = []

  constructor(private datos: PortfolioService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(portfolio => {
      this.habilidades=portfolio.habilidades;
      this.skills=portfolio.skills;
    });
  }
}