import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-redesdashboard',
  templateUrl: './redesdashboard.component.html',
  styleUrls: ['./redesdashboard.component.css']
})

export class RedesdashboardComponent implements OnInit {
  // Esto es para traer distintos datos
  botones1 : any = []

 constructor(private datos: PortfolioService) { }

    ngOnInit(): void {
      this.datos.getDatos().subscribe(portfolio => {
        this.botones1=portfolio.botones1;
      });
    }
}