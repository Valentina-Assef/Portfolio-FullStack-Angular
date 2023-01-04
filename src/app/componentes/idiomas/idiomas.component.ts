import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})

export class IdiomasComponent implements OnInit {
  // Esto es para traer distintos datos
  idiomas : any = []

  constructor(private datos: PortfolioService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(portfolio => {
      this.idiomas=portfolio.idiomas;
    });
  }
}
