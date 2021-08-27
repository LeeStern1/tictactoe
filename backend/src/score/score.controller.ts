import { Controller, Get, Post, Body } from '@nestjs/common';
import { ScoreService } from './score.service';

@Controller('score')
export class ScoreController {
  constructor(private readonly service: ScoreService) {}

  @Get()
  getScore() {
    return this.service.getScore();
  }

  @Post()
  sign(@Body('name') name: string): void {
    this.service.sign(name);
  }
}
