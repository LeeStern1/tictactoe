import { Controller, Get, Query } from '@nestjs/common';
import { PlayService } from './play.service';
import { ScoreService } from '../score/score.service';
import { MoveDto } from './move.dto';

@Controller('play')
export class PlayController {
    constructor(
        private readonly playService: PlayService,
        private readonly scoreService: ScoreService,
        ) {}
  
    @Get()
    move(@Query() moveDto: MoveDto) {
        const { board, players, name } = moveDto;
        const returnObject = this.playService.play(board, players, name);
        if(returnObject.win){
            if(returnObject.winner !== 'Server')
                this.scoreService.win(name);
        } else if (returnObject.tie) {
            this.scoreService.tie(name);
        }
        return returnObject;
    }
}
