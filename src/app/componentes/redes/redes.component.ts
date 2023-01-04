import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})

export class RedesComponent implements OnInit {
  // Esto es para traer distintos datos
  redes : any = []

 constructor(private datos: PortfolioService) { }

    ngOnInit(): void {
      this.datos.getDatos().subscribe(portfolio => {
        this.redes=portfolio.redes;
      });
    }
}

