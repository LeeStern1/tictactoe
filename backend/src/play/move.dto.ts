import {
  IsString,
  IsNumber,
  IsArray,
  ValidateNested,
  IsObject,
} from 'class-validator';
import { Type } from 'class-transformer';

export class BoardDto {
    [key: string]: number[];
}
  
export class PlayersDto {
    @IsArray()
    @IsNumber()
    @ValidateNested({ each: true })
    x: number[];

    @IsArray()
    @IsNumber()
    @ValidateNested({ each: true })
    o: number[];
}

export class MoveDto {
  @IsString()
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  board: string[];

  @IsObject()
  @ValidateNested()
  @Type(() => PlayersDto)
  players: PlayersDto;
}