import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayModule } from './play/play.module';
import { ScoreModule } from './score/score.module';

@Module({
  imports: [PlayModule, ScoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
