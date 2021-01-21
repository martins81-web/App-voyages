import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { Forfait } from '../forfait';

@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css']
})
export class MiniForfaitComponent implements OnInit {
  @Input() forfait: Forfait;

  
  constructor() {
   }

  

  ngOnInit(): void {
    let date1: Date = new Date(this.forfait.dateDepart); 
    
    console.log(date1);
    //console.log('Forfait:', this.forfait );

  }

  public duree(dateDeDepart: string, dateDeRetour:string): number {
    let date1: Date = new Date(dateDeDepart); 
    let date2: Date = new Date(dateDeRetour); 
    return (date2.valueOf() - date1.valueOf())/ (1000 * 3600 * 24);
  }

  private date(date: string):Date{
    return new Date(date);
  }
  
}
