import React from "react";
import Board from "./Board";
import Input from "./Input";
import Score from "./Score";

export default function Game() {
    return (
      <div className="game">
        <div className="game-board">
          <Input />
          <Board />
        </div>
        <div className="score">
          <Score />
        </div>
      </div>
    )
  }