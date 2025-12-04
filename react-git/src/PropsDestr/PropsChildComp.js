import React from "react";


const ChildComponent = (props) => {
    const {model,year,bike,month} = props.car
    return (
        <div>
            <div><h1>{model}</h1></div>
            <div><h1>{year}</h1></div>
            <div><h1>{bike}</h1></div>
            <div><h1>{month}</h1></div>
        </div>
    )
}

export default ChildComponent;