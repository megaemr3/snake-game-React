import React from "react";

function ScoreBoard({game}) {
    return <div className="score-board">
    <h1>Score</h1>
    <p>{game.score}</p>
    <h1>Best Score</h1>
    <p>{game.bestScore}</p>
</div>
}

export default ScoreBoard;