import { Pipe, PipeTransform } from '@angular/core';

import { Caracteristique } from './caracteristique';
import { Forfait } from './forfait';
import { Hotel } from './hotel';
import { Recherche } from './recherche';

@Pipe({
  name: 'rechercheForfait'
})
export class RechercheForfaitPipe implements PipeTransform {

  transform(forfaits: Forfait[], recherche: Recherche): Forfait [] {
    let caracteristiques=[];
    recherche.caracteristiques.map(item=>{
      if(item.selected===true)
        caracteristiques.push(item.name);
    });
    
    
    let forfaitsFilter=forfaits;
    if(recherche.nbEtoiles === null && recherche.duree === null && recherche.dateDepart === null && recherche.caracteristiques.length===0){
      return forfaits;
    }
    
    if(recherche.nbEtoiles!==null) {
      forfaitsFilter = forfaitsFilter.filter(forfait => forfait.hotel.nombreEtoiles === recherche.nbEtoiles);
    }
    if(recherche.duree!==null) {
      forfaitsFilter = forfaitsFilter.filter(forfait => this.duree(forfait.dateDepart,forfait.dateRetour) === recherche.duree);
    }
    if(recherche.dateDepart!==null) {
      forfaitsFilter = forfaitsFilter.filter(forfait => 
        new Date(forfait.dateDepart).toISOString().slice(0,10) === new Date(recherche.dateDepart).toISOString().slice(0,10));
    }
    if(caracteristiques.length>0) {
      caracteristiques.map( item=>{
        forfaitsFilter = forfaitsFilter.filter(forfait => forfait.hotel.caracteristiques.includes(item))
      });
    }
    
    //console.log(forfaitsFilter);
    return forfaitsFilter;
  }

    public duree(dateDeDepart: string, dateDeRetour:string): number {
    let date1: Date = new Date(dateDeDepart); 
    let date2: Date = new Date(dateDeRetour); 
    var difference = date2.getTime() - date1.getTime();
    var days = Math.ceil(difference / (1000 * 3600 * 24));

    return days;
  }
}
