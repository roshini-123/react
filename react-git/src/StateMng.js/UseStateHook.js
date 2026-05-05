import React, { useState } from "react";


const UseStateHook = () =>{
    const[city,setCity] = useState("Hyderabad");
    console.log("city",city)
    // setCity("Bangalore");
    return (
        <div>
            UseEffect2
        </div>
    )
}

export default UseStateHook;