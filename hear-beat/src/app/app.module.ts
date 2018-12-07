import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartCopapliModule } from './components/chart-component/chart.module';
import { SocketIO } from './services/socket-service/socket.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ChartCopapliModule
  ],
  providers: [SocketIO],
  bootstrap: [AppComponent]
})
export class AppModule { }
