import React,{useState} from "react";
import ChildComponent from "../PropsDestr/PropsChildComp";


const TerneryOperatorUse = () => {
    const[SampleCondition,setSampleCondition] = useState("True")

   const propsDestrObj = {
  "year":"2012",
  "month":"Dec",
  "bike":"Ternery",
  "model":"Meteor"
}

    return(
        <div>
            {SampleCondition ? <ChildComponent car = {propsDestrObj}/>:"This is Ternery Operator False"}
        </div>
    )
}


export default TerneryOperatorUse;