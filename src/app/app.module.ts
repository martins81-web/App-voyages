import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { ForfaitVedetteComponent } from './forfait-vedette/forfait-vedette.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
    ForfaitComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
    FormulaireForfaitComponent,
    EtoilesComponent,
    ForfaitVedetteComponent
  ],
  imports: [
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
    MatDividerModule,FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
