import React, { useState } from "react";


const UseStateHook = () =>{
    const[city,setCity] = useState("Hyderabad");
    console.log("city",city)


    return (
        <div>
            UseEffect2
        </div>
    )
}

export default UseStateHook;