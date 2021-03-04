import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { Forfait } from '../forfait';
import { ForfaitsService } from '../forfaits.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  columnsToDisplay = ['dateDepart', 'dateRetour', 'destination','nomHotel', 'prix', 'actions'];
  mesForfaits: Array<Forfait> ;
  selectedForfait : Forfait;
  forfaitEdit: any;
  orange:'orangered';

  constructor(private forfaitsService: ForfaitsService,private _snackBar: MatSnackBar,public dialog: MatDialog) { }

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
          //console.log(this.mesForfaits);
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

 openDialog(forfait: Forfait): void {
  const dialogRef = this.dialog.open(DialogDeleteComponent, {
    width: '700px',
    data: {forfait: forfait}
  });

  dialogRef.afterClosed().subscribe(forfait => {
    //console.log(`Dialog result: ${forfait}`);  
    if(forfait!=='close')
    this.onDelete(forfait);
  });
}

}
