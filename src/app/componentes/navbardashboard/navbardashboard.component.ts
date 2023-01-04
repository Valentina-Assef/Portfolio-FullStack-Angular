import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-navbardashboard',
  templateUrl: './navbardashboard.component.html',
  styleUrls: ['./navbardashboard.component.css']
})

export class NavbardashboardComponent implements OnInit {
  // Esto es para traer distintos datos
  logo: string = '';

 constructor(private datos: PortfolioService) { }

    ngOnInit(): void {
      this.datos.getDatos().subscribe(portfolio => {
        this.logo=portfolio.logo;
      });
    }
}
