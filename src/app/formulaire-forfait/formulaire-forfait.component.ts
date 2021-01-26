import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Caracteristique } from '../caracteristique';
import { CaracteristiquesComponent } from '../caracteristiques/caracteristiques.component';
import { Forfait } from '../forfait';
import { ForfaitsService } from '../forfaits.service';

/**
 * @title Highlight the first autocomplete option
 */
@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})
export class FormulaireForfaitComponent implements OnInit {
  id: any= {};
  nbEtoiles: number = 2;
  destinationsControl = new FormControl();
  villesDepartControl = new FormControl();
  filteredDestinations:  Observable<string[]>;
  filteredVillesDepart:  Observable<string[]>;
  villesDepart: string[] = ['Montréal', 'Toronto', 'Québec', 'Ottawa'];
  destinations: string[] = ['Méxique', 'Cuba', 'République dominicaine', 'Costa Rica', 'Guadaloupe', 'Haïti','Jamaïque', 'Martinique','Honduras'];
  newForfait: any = {};
  forfait: Forfait;
  @Input() caracteristiques : Array<Caracteristique>;
  
  constructor(private forfaitsService: ForfaitsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.newForfait = {
      da: "1996489",
      hotel: {
        caracteristiques :[]
      }
    }

    if( this.id!==null){
      this.newForfait=history.state;
      
    }
    
    this.filteredDestinations = this.destinationsControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterDestinations(value))
      );
      this.filteredVillesDepart = this.villesDepartControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterVillesDepart(value))
      );
  }

  
  onAdd(forfaitFormAjout: NgForm) {
      this.getCarateristiques();
      this.newForfait.dateDepart=this.newForfait.dateDepart.toLocaleDateString('en-CA');
      this.newForfait.dateRetour=this.newForfait.dateRetour.toLocaleDateString('en-CA');
      this.forfaitsService.addForfait(this.newForfait)
          .subscribe(forfait  => { forfaitFormAjout.resetForm();});
  }

  onEdit(forfaitFormAjout: NgForm) {
    console.log('Edit');
}


  private filterDestinations(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.destinations.filter(destination => destination.toLowerCase().includes(filterValue));
  }

  private filterVillesDepart(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.villesDepart.filter(ville => ville.toLowerCase().includes(filterValue));
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  getCarateristiques() {
    this.caracteristiques.map(item => {
      if(item.selected)
      this.newForfait.hotel.caracteristiques.push(item.name);
    });
  }
}



