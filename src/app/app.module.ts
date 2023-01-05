import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { IdiomasComponent } from './componentes/idiomas/idiomas.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { LoginComponent } from './componentes/modales/login/login.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NavbardashboardComponent } from './componentes/navbardashboard/navbardashboard.component';
import { LogoutComponent } from './componentes/modales/logout/logout.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RedesdashboardComponent } from './componentes/modales/redesdashboard/redesdashboard.component';
import { BannerdashboardComponent } from './componentes/modales/bannerdashboard/bannerdashboard.component';
import { PresentaciondashboardComponent } from './componentes/modales/presentaciondashboard/presentaciondashboard.component';
import { EducaciondashboardComponent } from './componentes/modales/educaciondashboard/educaciondashboard.component';
import { CursosdashboardComponent } from './componentes/modales/cursosdashboard/cursosdashboard.component';
import { IdiomasdashboardComponent } from './componentes/modales/idiomasdashboard/idiomasdashboard.component';
import { SkillsdashboardComponent } from './componentes/modales/skillsdashboard/skillsdashboard.component';
import { ExperienciadashboardComponent } from './componentes/modales/experienciadashboard/experienciadashboard.component';
import { ProyectosdashboardComponent } from './componentes/modales/proyectosdashboard/proyectosdashboard.component';

import { ErrorComponent } from './componentes/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    PresentacionComponent,
    EducacionComponent,
    CursosComponent,
    IdiomasComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    ProyectosComponent,
    FormularioComponent,
    LoginComponent,
    RedesComponent,
    DashboardComponent,
    PrincipalComponent,
    NavbardashboardComponent,
    LogoutComponent,
    FooterComponent,
    RedesdashboardComponent,
    BannerdashboardComponent,
    PresentaciondashboardComponent,
    EducaciondashboardComponent,
    CursosdashboardComponent,
    IdiomasdashboardComponent,
    SkillsdashboardComponent,
    ExperienciadashboardComponent,
    ProyectosdashboardComponent,
    ErrorComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
