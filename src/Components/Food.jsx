import React, { useState, useEffect } from "react";

function Food({snake, food, setFood, setGame}) {
    
    const [foodPos, setFoodPos] = useState({
        left : (Math.floor(Math.random() * 30) * 10),
        bottom : (Math.floor(Math.random() * 50) * 10)
    }) 
    useEffect(() => {
        if (food) {
        setFoodPos({
            left : (Math.floor(Math.random() * 30) * 10),
            bottom : (Math.floor(Math.random() * 50) * 10)

        })
       increaseScore()
    }
    }, [food])


    useEffect(() => {
        if (snake.left === foodPos.left && snake.bottom === foodPos.bottom) {
            setFood(pre => pre + 1)
            
        }
    }, [snake])

    function increaseScore() {
        setGame(pre => {return {...pre, score: pre.score + 10}})
    }
    

    return <div className="food" style={{
        left: `${foodPos.left}px`,
        bottom: `${foodPos.bottom}px`
        }}></div>
}


export default Food;