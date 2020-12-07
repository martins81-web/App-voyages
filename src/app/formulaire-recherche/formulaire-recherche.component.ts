import { Component, Input, OnInit } from '@angular/core';

interface Duree {
  valeur: number;
  valeurAffichee: string;
}

@Component({
  selector: 'app-formulaire-recherche',
  templateUrl: './formulaire-recherche.component.html',
  styleUrls: ['./formulaire-recherche.component.css']
})
export class FormulaireRechercheComponent implements OnInit {
  constructor() { }
  direction:string="column";
  nbEtoiles:number=2;
  ngOnInit(): void {

  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  durees: Array<Duree>= [
    {valeur: 7, valeurAffichee: '7 jours'},
    {valeur: 10, valeurAffichee: '10 jours'},
    {valeur: 14, valeurAffichee: '14 jours'}
  ];
}
