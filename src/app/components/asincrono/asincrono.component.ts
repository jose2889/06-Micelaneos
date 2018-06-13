import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asincrono',
  templateUrl: './asincrono.component.html',
  styleUrls: ['./asincrono.component.css']
})
export class AsincronoComponent implements OnInit {

  loading:boolean=false;

  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales','Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100,45,65,12];
  public doughnutChartType:string = 'doughnut'

    // Pie
    public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData:number[] = [300, 500, 100];
    public pieChartType:string = 'pie';
  constructor() { }

  ngOnInit() {
    this.loading = true;
    setTimeout( () => this.loading = false, 3000 )
  }
  // Doughnut
 ;
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  public lineChartColors : Array < any > = [{ backgroundColor: ["#A9CCE3", "#A2D9CE", "#F9E79F", "#F1C40F"] }];

}
