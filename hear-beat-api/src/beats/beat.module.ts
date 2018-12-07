import { Module } from '@nestjs/common';
import { BeatsController } from './beat.controller';
import { EventsModule } from '../gateways/socket/event.module';

@Module({
  controllers: [BeatsController],
  imports: [EventsModule],
  providers: [],
})
export class BeatModule {}