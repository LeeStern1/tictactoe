import { Module } from '@nestjs/common';
import { PlayController } from './play.controller';
import { PlayService } from './play.service';
import { ScoreService } from '../score/score.service';

@Module({
  controllers: [PlayController],
  providers: [PlayService, ScoreService]
})
export class PlayModule {}
