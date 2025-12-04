import React from "react";


function Travel() {
    return(
        <div>I want to travel</div>
    )
}


function Home(){
    return(
        <div>I want to be in Home</div>
    )
}

function Work(){
    return(
        <div>I am working
        <Travel/>
        <Home/>
        </div>
    )

}

export default Work;