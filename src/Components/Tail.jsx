import React from "react";

function Tail({item}) {
    const tailStyle = {
        left: `${item.left}px`,
        bottom: `${item.bottom}px`
    }

    return <div className="snake"  style={tailStyle}></div>
}

export default Tail;