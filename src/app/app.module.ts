import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AccueilComponent } from './accueil/accueil.component';
import { AdministrationComponent } from './administration/administration.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AproposComponent } from './apropos/apropos.component';
import { CaracteristiquesComponent } from './caracteristiques/caracteristiques.component';
import { EnteteComponent } from './entete/entete.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { ForfaitVedetteComponent } from './forfait-vedette/forfait-vedette.component';
import { ForfaitsCubaComponent } from './forfaits-cuba/forfaits-cuba.component';
import { ForfaitsMexiqueComponent } from './forfaits-mexique/forfaits-mexique.component';
import { ForfaitsService } from './forfaits.service';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
    FormulaireForfaitComponent,
    EtoilesComponent,
    ForfaitVedetteComponent,
    FormulaireRechercheComponent,
    CaracteristiquesComponent,
    AccueilComponent,
    EnteteComponent,
    PiedDePageComponent,
    AproposComponent,
    ForfaitsCubaComponent,
    ForfaitsMexiqueComponent,
    AdministrationComponent
  ],
  imports: [
    MatTableModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,FontAwesomeModule,MatDatepickerModule,BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatSelectModule,
    MatToolbarModule,
    MatSnackBarModule
  ],
  providers: [
    ForfaitsService,
    {provide: MAT_DATE_LOCALE, useValue: 'fr-CA'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
