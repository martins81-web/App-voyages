import { Component, OnInit } from '@angular/core';

import { Forfait } from '../forfait';
import { forfaits } from '../mock-forfaits';

@Component({
  selector: 'app-forfaits-mexique',
  templateUrl: './forfaits-mexique.component.html',
  styleUrls: ['./forfaits-mexique.component.css']
})
export class ForfaitsMexiqueComponent implements OnInit {
  mesForfaits: Array<Forfait> = forfaits;

  constructor() { }

  ngOnInit(): void {
  }

}
