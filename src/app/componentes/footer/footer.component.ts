import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  //Para inicializar variable de instancia
  footer: string = '';
  subir: string = '';

  constructor(
    //Inyectar el servicio para tener acceso, en la clase, a los metodos
    private datos: PortfolioService) { }

    ngOnInit(): void {
      //Para almacenar los datos que vienen del servicio
      this.datos.getDatos().subscribe(portfolio => {
        this.footer=portfolio.footer;
        this.subir=portfolio.subir;
      });
    }
}