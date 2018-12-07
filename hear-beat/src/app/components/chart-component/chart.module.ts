import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { ChartModule } from 'angular-highcharts';
import { SocketIO } from '../../services/socket-service/socket.service';

@NgModule({
    imports: [ CommonModule , ChartModule ],
    declarations: [ ChartComponent],
    exports: [ChartComponent],
    providers: [SocketIO],
})
export class ChartCopapliModule {}