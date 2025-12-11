import logo from './logo.svg';
import './App.css';
import ComponentNew from './ComponentFile';
import Work from './Nestedcomp';
import CssStyling from './ElementFile';
import GettingImage from './ImageCreating';
import FirstComponent from './PropsContainer/FirstComp';
import ThirdComponenet from './PropsContainer/ThirdComp';
import FourthCompoenent from './PropsContainer/FourthComp';
import SecondComponent from './PropsContainer/secondComp';
import ChildComponent from './PropsDestr/PropsChildComp';
import UseStateHook from './StateMng.js/UseStateHook';
import UseEffectHook from './StateMng.js/UseEffectHook';
import TerneryOperatorUse from './TerneryOperator.js/TerneryOpe';
import OnClickEvent from './EventsFold/onClickEve';


const user = {
  "name":"Roshini",
  "age":26,
  "born":"Feb 7th"
}

const propsDestrObj = {
  "year":"2012",
  "month":"Dec",
  "bike":"Royal enfiled",
  "model":"Hunter"
}



function App() {
  return (
    <div>
      <ComponentNew/>
      <Work/>
      <CssStyling/>
      <GettingImage/>
      <FirstComponent name = {user.name}/>
      <SecondComponent name = {user.age}/>
      <ThirdComponenet name = {user.born}/>
      <FourthCompoenent name  = "Vinayaka"/>
      <ChildComponent car = {propsDestrObj}/>
      <UseStateHook/>
      <UseEffectHook/>
      <TerneryOperatorUse/>
      <OnClickEvent/>
    </div>
  );
}

export default App;
