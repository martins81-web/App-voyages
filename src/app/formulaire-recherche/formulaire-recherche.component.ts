import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Caracteristique } from '../caracteristique';
import { Recherche } from '../recherche';

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
  @Input() recherche: Recherche;
  @Output() rechercheChange = new EventEmitter();
  @Input() caracteristiques: Array<Caracteristique>;
    
  changeDateDepart(nouvelleValeur) {
    let nouvelleRecherche : Recherche = {dateDepart: nouvelleValeur,
                                        duree: this.recherche.duree,
                                        caracteristiques: this.recherche.caracteristiques,
                                        nbEtoiles: this.recherche.nbEtoiles
    };
    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);
  }

  changeDuree(nouvelleValeur) {
    let nouvelleRecherche : Recherche = {dateDepart: this.recherche.dateDepart,
                                        duree: nouvelleValeur,
                                        caracteristiques: this.recherche.caracteristiques,
                                        nbEtoiles: this.recherche.nbEtoiles
    };
    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);
  }

  changeNbEtoiles(nouvelleValeur) {
    let nouvelleRecherche : Recherche = {dateDepart: this.recherche.dateDepart,
                                        duree: this.recherche.duree,
                                        caracteristiques: this.recherche.caracteristiques,
                                        nbEtoiles: nouvelleValeur
    };
    
    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);
  }

  ngOnInit(): void{
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
