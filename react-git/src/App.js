import logo from './logo.svg';
import './App.css';

import HeaderObj from './donar-module/HeaderObj';
import footerObj from './donar-module/FooterObj';
import FooterObj from './donar-module/FooterObj';
import DashboardObj from './donar-module/Dashboard';


function App() {
  return (
    <div className='w-screen h-screen dark:bg-gray-800 pt-6'> 
      <HeaderObj/>
      <DashboardObj/>
      <FooterObj/>
    </div>
  );
}

export default App;
