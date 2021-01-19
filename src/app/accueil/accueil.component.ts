import { Component, Input, OnInit } from '@angular/core';

import { Forfait } from '../forfait';
import { forfaits } from '../mock-forfaits';
import { Recherche } from '../recherche';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }
  mesForfaits: Array<Forfait> = forfaits;
  @Input() recherche: Recherche={
    dateDepart : null,
    duree: null,
    caracteristiques: [],
    nbEtoiles: null}
    ;
  ngOnInit(): void {
  }

}
