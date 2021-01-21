import { Component, OnInit } from '@angular/core';

import { Forfait } from '../forfait';
import { ForfaitsService } from '../forfaits.service';

@Component({
  selector: 'app-forfaits-mexique',
  templateUrl: './forfaits-mexique.component.html',
  styleUrls: ['./forfaits-mexique.component.css']
})
export class ForfaitsMexiqueComponent implements OnInit {
  mesForfaits: Array<Forfait> ;
  constructor(private forfaitsService: ForfaitsService) { }

  ngOnInit(): void {
    this.getForfaits();

  }

  getForfaits(): void {
    this.forfaitsService.getForfaits()
        .subscribe(resultat => {
          this.mesForfaits = resultat
        });

}

}
