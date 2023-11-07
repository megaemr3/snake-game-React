import React, { useState, useEffect, useRef } from "react";
import Snake from "./Snake";
import Food from "./Food";
import Tail from "./Tail";
import ScoreBoard from "./ScoreBoard";

function App() {
    const [snake, setSnake] = useState({
        left: 100, 
        bottom: 100,
    });
    const [food, setFood] = useState(0);
    const [tail, setTail] = useState([]);
    const [game, setGame] = useState({
        speed: 100,
        score: 0,
        bestScore: localStorage.getItem("bestScore")
    })

    let currentDirection = "ArrowUp";
    
    const timer = useRef();
 
   
    useEffect(() => {
       document.addEventListener("keydown", specifyDirection);
       timer.current = setInterval(startGame, game.speed);
    }, [])

    useEffect(() => {
        setTail(pre => {
            return pre.filter((item, index) => index < food);
        })
        gameOver()
    }, [snake])
    
    function startGame() {
        setSnake(pre => {
            setTail(previous => {return [{left: pre.left, bottom: pre.bottom} , ...previous]})
            let result;
            switch(currentDirection) {
                case "ArrowUp":
                    
                 result = {...pre, bottom: pre.bottom + 10}
                
                break;
                case "ArrowLeft":
                   
                    result = {...pre, left: pre.left - 10}
                   
                break;
                case "ArrowRight":
                   
                    result = {...pre, left: pre.left + 10}
                   
                break;
                case "ArrowDown":
                   
                    result = {...pre, bottom: pre.bottom - 10}
                   
                break;
                default:
            }
            
            if (result.left < 0 || result.left > 290) {
                result = {...result, left: result.left < 0 ? 290 : 0}
              }
              if (result.bottom < 0 || result.bottom > 490) {
                result = {...result, bottom: result.bottom < 0 ? 490 : 0}
              } 
            
            return result;
        })
        
        
    }

    function specifyDirection(event) {
        
        if ((event.key === "ArrowUp" && currentDirection !== "ArrowDown") || 
        (event.key === "ArrowDown" && currentDirection !== "ArrowUp") ||
        (event.key === "ArrowLeft" && currentDirection !== "ArrowRight") ||
         (event.key === "ArrowRight" && currentDirection !== "ArrowLeft")) {
            currentDirection = event.key;
           
        }
        }

        function gameOver() {
            let isOver = tail.some(item => (item.left === snake.left) && (item.bottom === snake.bottom));
            isOver && clearInterval(timer.current)
            isOver && enterBestScore()
        }
        function enterBestScore() {
            if (game.bestScore === null || game.bestScore < game.score ) {
                localStorage.setItem("bestScore", game.score);
                setGame(pre => {return {...pre, bestScore: pre.score}})
            } 
        
        }

    return <div className="game-display">
    <Snake snake={snake} />
    <Food snake={snake} setSnake={setSnake} food={food} setFood={setFood} setGame={setGame} />
    { food > 0 && tail.map((item, index) => {
        return <Tail key={index} item={item} />
    })}
    <ScoreBoard game={game} />
    </div>
}

export default App;