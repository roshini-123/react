import React, { useState } from "react";



const OnClickEvent = () => {
    const [number,setNumber] = useState(0);

    const IncreaseNumber = () => {
        setNumber(number+1);
    }

    const DecreaseNumber = () => {
        if(number>0){
             setNumber(number-1);
        }
       
    }

    const Reset = () => {
        setNumber(0);
    }
    return(
        <div>
            <h1>{number}</h1>
            <button className = "button" onClick={IncreaseNumber}>incremnet</button>
            <br></br>
            <button className="button" onClick = {DecreaseNumber}>Decrement</button>
            <br></br>
            <button className="button" onClick={Reset}>Reset</button>
        </div>
    )
}

export default OnClickEvent;