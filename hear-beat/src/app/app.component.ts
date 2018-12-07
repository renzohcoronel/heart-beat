import { Component } from '@angular/core';
import { SocketIO, Event } from './services/socket-service/socket.service';
import { DataSensor } from './model/DataSensor';

@Component({
  selector: 'app-root',
  template: `
      <div class="container-fluid"> 
          <div class="row">
              <div class="col-md-6 text-center p-2">
                  <app-chart></app-chart>
              </div>
              <div class="col-md-6 text-center p-2">
                  <app-chart></app-chart>
              </div>
          </div>
      </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hear-beat';

  constructor(){
      
  }

}
