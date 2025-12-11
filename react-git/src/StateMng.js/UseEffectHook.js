import React,{useEffect,useState} from "react";

const UseEffectHook = () => {
    const [city,setCity] = useState("Hyderabad");

    useEffect(() => {
        if(city === "Hyderabad"){
            setCity("Delhi")
        }else{
            setCity("Warangal")
        }

    },[])

return (
    <div>
        <h1>
            The UseEffect gives You City .{city}
        </h1>    
</div>
)
}


export default UseEffectHook;