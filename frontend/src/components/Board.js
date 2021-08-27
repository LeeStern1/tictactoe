import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setGameOver } from '../redux/app.action';

export default function Board() {
    const [squares, setSquares] = React.useState(Array(9).fill(null));
    const [players, setPlayers] = React.useState({ x: [], o: []});
    const [gameStatus, setGameStatus] = React.useState({ nextPlayer: 'x', win: false, tie: false, winner: null });
    const [status, setStatus] = React.useState('');
    const name = useSelector(state => state.user);
    const gameOver = useSelector(state => state.gameOver);
    const dispatch = useDispatch();

    const renderMove = async(squares) => {
      try {
        setGameStatus({ nextPlayer: 'o'});
        const { data } = await axios.get('/play', { params: { board: squares, players, name } });
        if(data.move) {
          selectSquare(data.move, 'o');
          data.nextPlayer = 'x';
        }
        setGameStatus(data);

      } catch (err) {
        console.log(err);
      }
    }

    React.useEffect(() => {
      if(players.x.length > 0){
        renderMove(squares);
      }
    }, [players['x'].length]);

    React.useEffect(() => {
      if(name){
        setSquares(Array(9).fill(null))
        setPlayers({ x: [], o: []})
      }
    }, [name]);

    React.useEffect(() => {
      gameOverCheck();
      const statusChange = gameStatus.win
      ? `The winner is: ${gameStatus.winner}`
      : gameStatus.tie
      ? `It's a tie!`
      : `Next player: ${gameStatus.nextPlayer}`;
      setStatus(statusChange);
    }, [gameStatus]);
  
    function selectSquare(square, player) {
      if(!squares[square]){
        const squaresCopy = [...squares];
        squaresCopy[square] = player;
        setSquares(squaresCopy);
        

        const playersCopy = {...players};
        playersCopy[player].push(parseInt(square));
        setPlayers(playersCopy);
      }
    }
  
    function restart() {
      setSquares(Array(9).fill(null))
      setPlayers({ x: [], o: []})
      dispatch(setGameOver(false));
    }
  
    function gameOverCheck() {
      if(gameStatus.win === true || gameStatus.tie === true) {
        dispatch(setGameOver(true));
      }
    }
  
    function renderSquare(i) {
      return (
        <button className="square" disabled={gameOver || !name} onClick={() => selectSquare(i, 'x')}>
          {squares[i]}
        </button>
      )
    }
  
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button className="restart" onClick={restart}>
          restart
        </button>
      </div>
    )
  }