import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DataSensor } from '../../model/DataSensor';
import { Input } from '@angular/core';
import { SocketIO, Event } from '../../services/socket-service/socket.service';

@Component({
  selector: 'app-chart',
  template: `
    
    
    <div class="row">
        <div class="col-md-12 h-100">
          <h4> Dispositivo {{beat.sensorId}}</h4>
          <div [chart]="chart"></div>
          <i class="fas  fa-4x fa-heartbeat p-2" style="color:red"> <span class="p-2">{{beat.value}} </span></i>     
        </div>
    </div>
    
    `,
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  beat:DataSensor;

  chart = new Chart({
    chart: {
      type: 'line',
      borderRadius: 18,
      animation: false

    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },

    series: [
      {
        name: '',
        data: []
      }
    ],
    plotOptions: {
      series: {
        animation: {
          duration: 100
        }
      }
    }
  });

  constructor(private sockect: SocketIO) {

  }


  ngOnInit(): void {

    this.sockect.initSocket();

    this.sockect.onMessage('beats')
      .subscribe((data: DataSensor) => {
        this.chart.addPoint(data.value);
        this.beat = data;
      });

    this.sockect.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this.sockect.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });

   }
}
