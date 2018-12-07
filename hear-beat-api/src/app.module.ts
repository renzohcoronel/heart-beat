import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeatModule } from 'beats/beat.module';

@Module({
  imports: [BeatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
