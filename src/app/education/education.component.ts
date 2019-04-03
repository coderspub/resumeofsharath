import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  ngOnInit() {
  }
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) {

  }
  
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.XYChart);

      chart.paddingRight = 20;

      let data = [
        {
          "x": "1",
          "y": 1,
          "text": "[bold]2012 SSLC[/]\nJanaki Ramachandran Matriculation School[/]\n[bold]95%",
          "center": "bottom"
      }, {
          "x": "2",
          "y": 1,
          "text": "[bold]2014 Higher Secondary[/]\nJanaki Ramachandran Kalalayalam Matriculation Higher Secondary School[/]\n[bold]93%",
          "center": "top"
      }, {
          "x": "3",
          "y": 1,
          "text": "[bold]2014 - 2018 B.E. Electronics and Communication[/]\nSaveetha Engineering College, Chennai[/]\n[bold]7.4 CGPA",
          "center": "bottom"
      }, {
          "x": "4",
          "y": 1,
          "text": "[bold]2018 - Present Embedded Engineer[/]\nCoovum Advanced Institue of Science Engineering and Research",
          "center": "top"
      }
      ];


      chart.data = data;

  
      let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
xAxis.dataFields.category = "x";
xAxis.renderer.grid.template.disabled = true;
xAxis.renderer.labels.template.disabled = true;
xAxis.tooltip.disabled = true;

let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
yAxis.min = 0;
yAxis.max = 1.99;
yAxis.renderer.grid.template.disabled = true;
yAxis.renderer.labels.template.disabled = true;
yAxis.renderer.baseGrid.disabled = true;
yAxis.tooltip.disabled = true;


// Create series
let series = chart.series.push(new am4charts.LineSeries());
series.dataFields.categoryX = "x";
series.dataFields.valueY = "y";
series.strokeWidth = 4;
series.sequencedInterpolation = true;

let bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.setStateOnChildren = true;
bullet.states.create("hover");
bullet.circle.radius = 10;
bullet.circle.states.create("hover").properties.radius = 15;

let labelBullet = series.bullets.push(new am4charts.LabelBullet());
labelBullet.setStateOnChildren = true;
labelBullet.states.create("hover").properties.scale = 1.2;
labelBullet.label.text = "{text}";
labelBullet.label.maxWidth = 150;
labelBullet.label.wrap = true;
labelBullet.label.truncate = false;
labelBullet.label.textAlign = "middle";
labelBullet.label.paddingTop = 20;
labelBullet.label.paddingBottom = 20;
labelBullet.label.fill = am4core.color("#999");
labelBullet.label.states.create("hover").properties.fill = am4core.color("#000");

labelBullet.label.propertyFields.verticalCenter = "center";


chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.disabled = true;
chart.cursor.lineY.disabled = true;

      this.chart = chart;
    });
  }
  


  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}

