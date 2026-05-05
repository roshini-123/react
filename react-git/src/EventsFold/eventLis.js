import React, { useState,useEffect} from "react";

const EventList = () => {
    const [screenSize,setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight

    })

    const updateScreenSize = () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', updateScreenSize)
        return () => {
            window.removeEventListener('resize', updateScreenSize)
        }
    }, [])


    return(
        <div>
            <h1>ScreenSize: {screenSize.width} x {screenSize.height}</h1>?</div>
    )
}


export default EventList;