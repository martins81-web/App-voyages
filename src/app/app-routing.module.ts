import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { ForfaitsCubaComponent } from './forfaits-cuba/forfaits-cuba.component';
import { ForfaitsMexiqueComponent } from './forfaits-mexique/forfaits-mexique.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent }, 
  { path: 'apropos', component: AproposComponent },
  { path: 'forfaitsCuba', component: ForfaitsCubaComponent },
  { path: 'forfaitsMexique', component: ForfaitsMexiqueComponent },
  { path: '', redirectTo:'/accueil', pathMatch:'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
