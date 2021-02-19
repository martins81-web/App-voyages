import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';

import { Reservation } from '../Reservation';
import { ReservationsService } from '../reservations.service';

@Component({
  selector: 'app-graphique-destinations',
  templateUrl: './graphique-destinations.component.html',
  styleUrls: ['./graphique-destinations.component.css']
})
export class GraphiqueDestinationsComponent implements OnInit {
  reservations: Array<Reservation> ;
  labels:  Array<string> =[] ;
  data: Array<number>=[];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: []
    },
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

  getLabels () :void{

    this.reservations.map(reservation =>{
      if(!this.labels.includes(reservation.destination)){
        this.labels.push(reservation.destination);
      }
    });
    //console.log(this.labels);
  }

  getValues () :void{
    this.data= new Array(this.labels.length).fill(0);
    this.reservations.map(reservation =>{
      if(this.labels.includes(reservation.destination))
      {
        let index= this.labels.indexOf(reservation.destination);
        this.data[index]++;
      }
    });
    //console.log(this.data);

  }

  addValues () :void{
    for(let i=0; i<this.labels.length; i++){
      this.pieChartLabels.push(this.labels[i]);
      this.pieChartData.push(this.data[i]);
      this.pieChartColors[0].backgroundColor.push(this.getRandomColor());

    }


  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

}
