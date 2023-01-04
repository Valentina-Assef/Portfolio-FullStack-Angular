import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  // Esto es para traer distintos datos
  estudios : any = []

 constructor(private datos: PortfolioService) { }

    ngOnInit(): void {
      this.datos.getDatos().subscribe(portfolio => {
        this.estudios=portfolio.estudios;
      });
    }
}

