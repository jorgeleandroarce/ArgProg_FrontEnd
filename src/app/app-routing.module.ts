import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditMeComponent } from './componentes/aceerca-de/edit-me/edit-me.component';
import { EditEducComponent } from './componentes/educacion/edit-educ/edit-educ.component';
import { NewEducComponent } from './componentes/educacion/new-educ/new-educ.component';
import { EditExpComponent } from './componentes/experiencia/edit-exp/edit-exp.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { FullporfolioComponent } from './componentes/fullporfolio/fullporfolio.component';
import { NewHabHComponent } from './componentes/habilidades/new-hab-h/new-hab-h.component';
import { NewHabSoftComponent } from './componentes/habilidadessoft/new-hab-soft/new-hab-soft.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditProyComponent } from './componentes/proyectos/edit-proy/edit-proy.component';
import { NewProyComponent } from './componentes/proyectos/new-proy/new-proy.component';

const routes: Routes = [
  {path: '', component:FullporfolioComponent},
  {path: 'login', component:LoginComponent},
  {path: 'newEduc', component:NewEducComponent},
  {path: 'newExp', component:NewExperienciaComponent},
  {path: 'newHabH', component:NewHabHComponent},
  {path: 'newHabS', component:NewHabSoftComponent},
  {path: 'newProy', component:NewProyComponent},
  {path: 'editMe/:id', component:EditMeComponent},
  {path: 'editEduc/:id', component:EditEducComponent},
  {path: 'editExp/:id', component: EditExpComponent},
  {path: 'editProy/:id', component:EditProyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
