import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  public chart: any;
  public informations: any;
  title: string = "";
  value: number = null;

  constructor(
    private service: ChartService,
    private http: HttpClient,
    private app: AppComponent) { };

  ngOnInit() {
    this.buscarCharts();
    this.buscarInfo();
    this.app.isPrincipal = false;
  }

  buscarCharts(){
    this.service.getCharts().subscribe((dados: any[]) => {
     this.chart = dados;
     console.log("Dados indice 0: " + this.chart[0])
     this.chart.forEach(element => {

      this.lineChartLabels.push(element.datas); // dd/MM/yyyy
      console.log("Labels: " + element.datas);

      this.lineChartData.push(element.valores[0]); // valores
      console.log("Dados: " + element.valores[0]);

      this.lineChartColors.push(element.cores[0]); // cores
      console.log("Cores: " + element.cores[0]);

      this.lineChartOptions = element.datas; // opções 
      console.log("Datas " + element.datas);

      this.lineChartLegend.push(element.title); // título
      console.log("Título: " + element.title);
     });

   });
  }

  buscarInfo(){
    this.service.getInformations().subscribe((dados: any[]) => {
     this.informations = dados;
     console.log("Dados indice 0: " + this.informations[0])
     this.informations.forEach(element => {

      this.title = element.title; // title
      console.log("Labels: " + element.title);

      this.value = element.value; // value
      console.log("Dados: " + element.value);

     });

   });
  }

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  public lineChartData = [];
  public lineChartOptions = [];
  public lineChartColors = [];
  public lineChartLabels = [];
  public lineChartLegend = [];
  public lineChartType = "line";
  public lineChartPlugins = [];
  
}
