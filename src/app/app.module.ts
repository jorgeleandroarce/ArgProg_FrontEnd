import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AceercaDeComponent } from './componentes/aceerca-de/aceerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PorfolioService } from './servicios/porfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { FullporfolioComponent } from './componentes/fullporfolio/fullporfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HabilidadessoftComponent } from './componentes/habilidadessoft/habilidadessoft.component';
import { NewEducComponent } from './componentes/educacion/new-educ/new-educ.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { NewHabHComponent } from './componentes/habilidades/new-hab-h/new-hab-h.component';
import { NewHabSoftComponent } from './componentes/habilidadessoft/new-hab-soft/new-hab-soft.component';
import { NewProyComponent } from './componentes/proyectos/new-proy/new-proy.component';
import { EditEducComponent } from './componentes/educacion/edit-educ/edit-educ.component';
import { EditProyComponent } from './componentes/proyectos/edit-proy/edit-proy.component';
import { EditMeComponent } from './componentes/aceerca-de/edit-me/edit-me.component';
import { EditExpComponent } from './componentes/experiencia/edit-exp/edit-exp.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { CookieService } from 'ngx-cookie-service';
import { AutenticacionService } from './servicios/autenticacion.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AceercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    LoginComponent,
    FullporfolioComponent,
    ContactoComponent,
    HabilidadessoftComponent,
    NewEducComponent,
    NewExperienciaComponent,
    NewHabHComponent,
    NewHabSoftComponent,
    NewProyComponent,
    EditEducComponent,
    EditProyComponent,
    EditMeComponent,
    EditExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [PorfolioService, AutenticacionService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
