import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Forfait } from '../forfait';
import { ForfaitsService } from '../forfaits.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  columnsToDisplay = ['dateDepart', 'dateRetour','nomHotel', 'prix', 'actions'];
  mesForfaits: Array<Forfait> ;
  selectedForfait : Forfait;
  forfaitEdit: any;

  constructor(private forfaitsService: ForfaitsService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getForfaits();

  }

  onSelect(forfait: Forfait): void {
    this.selectedForfait = forfait; 
  }


  getForfaits(): void {
    this.forfaitsService.getForfaits()
        .subscribe(resultat => {
          this.mesForfaits = resultat
          console.log(this.mesForfaits);
        });
}

onDelete(forfait: Forfait): void {
  this.forfaitsService.deleteForfait(forfait._id)
      .subscribe(result => {
        this.mesForfaits = this.mesForfaits.filter(h => h !== forfait)
        this._snackBar.open("Administration", "Forfait supprimé", {
          duration: 2000,
          verticalPosition: 'top'
        });
      });
 }

 onEdit(forfait: Forfait): void {
   //console.log(forfait.destination, forfait._id);
 }

}
