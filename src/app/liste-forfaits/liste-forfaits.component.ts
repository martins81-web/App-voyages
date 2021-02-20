import { Component, Input, OnInit } from '@angular/core';

import { Forfait } from '../forfait';
import { ForfaitsService } from '../forfaits.service';
import { Recherche } from '../recherche';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {

  @Input() recherche: Recherche={
    dateDepart :null,
    duree: null,
    caracteristiques: [],
    nbEtoiles: null };

  mesForfaits: Array<Forfait> ;

  constructor(private forfaitsService: ForfaitsService) { }

  ngOnInit(): void {
    this.getForfaits();

  }

  getForfaits(): void {
    this.forfaitsService.getForfaits()
        .subscribe(resultat => {
          this.mesForfaits = resultat;
        });

}
}