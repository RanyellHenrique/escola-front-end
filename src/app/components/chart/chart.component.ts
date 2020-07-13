import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  title = 'Ciências';
  type = 'ColumnChart';
  data = [
    ['Ciências', 750, style, 430, style, 620, style]
  ];
  columnNames = [
    'Browser',
    'Exatas', {role: 'style'},
    'Humanas', {role: 'style'},
    'Biologicas', {role: 'style'}
  ];
  options = {
    backgroundColor	: 'transparent',
    colors: ['#7b1fa2', '#ab3eda', '#bfbfbf', '#595959'],
    legend: { position: 'top', maxLines: 4, textStyle: {color: '#FFF'}},
    hAxis: {
      textStyle: {color: '#FFF'}
    },
    vAxis: {
      textStyle: {color: '#FFF'}
    },
    width: 350,
    height: 400,
  };


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(e: any): void{
    if (e.selection.length >= 1){
      const column = e.selection[0].column;
      console.log(this.columnNames[column]);
    }else{
      console.log('Vazio');
    }
  }

}

const style = 'fill-opacity: 0.5;';
