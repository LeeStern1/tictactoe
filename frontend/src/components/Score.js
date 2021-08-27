import React from "react";
import axios from "axios";
import { useSelector } from 'react-redux';

export default function Score() {
    const gameOver = useSelector(state => state.gameOver);
    const [winnersList, setWinnersList] = React.useState([]);
    
    const renderScore = async() => {
      try {
        const { data } = await axios.get('/score');
        setWinnersList(data);

      } catch (err) {
        console.log(err);
      }
    }

    React.useEffect(() => {
      renderScore();
    }, [gameOver]);

    return (
      <div className="score">
        <div>Score:</div>
        <ol>
          {winnersList.map(winner => {
            return <li className='score-li'>{winner.name}: {winner.value}</li>
          })}
        </ol>
      </div>
    )
  }