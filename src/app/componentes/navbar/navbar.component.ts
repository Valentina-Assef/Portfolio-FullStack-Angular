import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  // Esto es para traer distintos datos
  navbar : any = []
  logo: string = '';

 constructor(private datos: PortfolioService) { }

    ngOnInit(): void {
      this.datos.getDatos().subscribe(portfolio => {
        this.navbar=portfolio.navbar;
        this.logo=portfolio.logo;
      });
    }
}
