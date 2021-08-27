import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class PlayService {
    options = [1, 3];
    emptyBoard = ['0','1','2','3','4','5','6','7','8'];
    winCheck(board): string {
        if(board[4]){
            const player = board[4];
            for(let i=1; i<5; i++){
                if(this.winCondition(board, player, 4+i, 4-i)) {
                    return player;
                }
            }
        }
        if(board[0]){
            const player = board[0];
            for (const i of this.options) {
                if(this.winCondition(board, player, 0+i, 0+(i*2))) {
                    return player;
                }
            };
        }
        if(board[8]){
            const player = board[8];
            for (const i of this.options) {
                if(this.winCondition(board, player, 8-i, 8-(i*2))) {
                    return player;
                }
            };
        }
    }

    winCondition(board, player, second, third) {
        return board[second] && board[second] === player && board[third] && board[third] === player;
    }

    tieCheck(board){
        if(Object.keys(board).length >= 8){
            return true;
        }
    }

    move(board){
        const emptySquares = this.emptyBoard.filter(square => Object.keys(board).indexOf(square) === -1);
        return emptySquares[Math.floor(Math.random()*emptySquares.length)];
    }

    play(board, players, name) {
        const filledBoard = {};
        board.forEach((square, i) => {
          if (square !== 'null') {
            filledBoard[i] = square;
          }
        });
        const returnObject = {
            win: false,
            winner: undefined,
            move: undefined,
            tie: false
        }
        this.gameOver(filledBoard, players, name, returnObject);
        if(!returnObject.win && !returnObject.tie){
            returnObject.move = this.move(filledBoard);
            filledBoard[returnObject.move] = 'o';
            this.gameOver(filledBoard, players, name, returnObject);
        }
        return returnObject;
    }

    gameOver(filledBoard, players, name, returnObject) {
        const possibleWin = Object.values(JSON.parse(players)).map((player: number[]) => player.length >= 3);
        let winner;
        let tie;

        if(possibleWin.length > 0 && (possibleWin[0] || possibleWin[1])){
            winner = this.winCheck(filledBoard);
        }
        if(!winner){
            tie = this.tieCheck(filledBoard);
        } else {
            returnObject.win = true;
            if(winner === 'x'){
                returnObject.winner=name;
            } else {
                returnObject.winner='Server';
            }
        }
        if(tie){
            returnObject.tie = true;
        }
        return returnObject;
    }
}
