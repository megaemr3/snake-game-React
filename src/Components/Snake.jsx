import React from "react";

function Snake({snake}) {
    
    const snakeStyle = {
        left: `${snake.left}px`,
        bottom: `${snake.bottom}px`
    }

    return <div className="snake" style={snakeStyle}>

    </div>
}

export default Snake;