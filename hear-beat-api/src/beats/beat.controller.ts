import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { EventsGateway } from 'gateways/socket/event.gateway';
import { DataSensor } from 'models/dataSensor';

@Controller('/api')
export class BeatsController {


  constructor(private eventGateway: EventsGateway) {
  }

  @Post('/beats')
  async postBeatData(@Res() res, @Body() dataSensor: DataSensor) {
    console.log(dataSensor);
    this.eventGateway.emitMessage("beats", dataSensor);
    res.status(HttpStatus.OK).send("OK");
  }

  
}