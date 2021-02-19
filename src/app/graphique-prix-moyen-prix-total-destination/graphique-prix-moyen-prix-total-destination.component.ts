import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

import { Reservation } from '../Reservation';
import { ReservationsService } from '../reservations.service';

@Component({
  selector: 'app-graphique-prix-moyen-prix-total-destination',
  templateUrl: './graphique-prix-moyen-prix-total-destination.component.html',
  styleUrls: ['./graphique-prix-moyen-prix-total-destination.component.css']
})
export class GraphiquePrixMoyenPrixTotalDestinationComponent implements OnInit {
  
  reservations: Array<Reservation> ;
  labels:  Array<string> =[] ;
  venteTotal: Array<number>=[];
  nombrePassagers: Array<number>=[];
  prixMoyen: Array<number>=[];
  public barChartOptions: ChartOptions = {
    responsive: true,      
  };
  
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [ ], label: 'Prix moyen ($)' },
    //{ data: [ ], label: 'Nombre de passagers' },
  ];

  constructor(private reservationsService: ReservationsService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void {
    this.reservationsService.getReservations()
        .subscribe(resultat => {
          this.reservations = resultat;
          //console.log(this.reservations);
          this.getLabels();
          this.getValues();
          this.addValues();

        });
  }

  addValues () :void{
    for(let i=0; i<this.labels.length; i++){
      this.barChartLabels.push(this.labels[i]);
      this.barChartData[0].data.push(this.prixMoyen[i]);
      //this.barChartData[1].data.push(this.nombrePassagers[i]);

    }
  }

  getLabels () :void{
    this.reservations.map(reservation =>{
      if(!this.labels.includes(reservation.destination)){
        this.labels.push(reservation.destination);
      }
    });
    //console.log(this.labels);
  }

  getValues () :void{
    this.venteTotal= new Array(this.labels.length).fill(0);
    this.nombrePassagers= new Array(this.labels.length).fill(0);
    this.prixMoyen= new Array(this.labels.length).fill(0);

    this.reservations.map(reservation =>{
      if(this.labels.includes(reservation.destination))
      {
        let index= this.labels.indexOf(reservation.destination);
        this.venteTotal[index]+=reservation.prixTotal;
        this.nombrePassagers[index]+=reservation.nombrePassagers;
      }
    });

    //console.log(this.venteTotal);
    //console.log(this.nombrePassagers);
    for(let i=0; i<this.labels.length;i++){
      this.prixMoyen[i]=Number((this.venteTotal[i]/this.nombrePassagers[i]).toFixed());
    }
    //console.log(this.prixMoyen);
   
  }

}
