import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  // Esto es para traer distintos datos
  botones1 : any = []
  botones2 : any = []
  botones3 : any = []

 constructor(private datos: PortfolioService) { }

    ngOnInit(): void {
      this.datos.getDatos().subscribe(portfolio => {
        this.botones1=portfolio.botones1;
        this.botones2=portfolio.botones2;
        this.botones3=portfolio.botones3;
      });
    }
}
