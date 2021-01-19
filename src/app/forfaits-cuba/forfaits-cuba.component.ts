import { Component, OnInit } from '@angular/core';

import { Forfait } from '../forfait';
import { forfaits } from '../mock-forfaits';


@Component({
  selector: 'app-forfaits-cuba',
  templateUrl: './forfaits-cuba.component.html',
  styleUrls: ['./forfaits-cuba.component.css']
})
export class ForfaitsCubaComponent implements OnInit {
  mesForfaits: Array<Forfait> = forfaits;
 
  constructor() { }

  contains(destination, pays) {
    console.log(destination);
    console.log(pays);

    if (destination.includes(pays))
    {
      return true;
    }
  }

  ngOnInit(): void {
  }

}
