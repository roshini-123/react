import logo from './logo.svg';
import './App.css';

import HeaderObj from './donar-module/HeaderObj';
import footerObj from './donar-module/FooterObj';
import FooterObj from './donar-module/FooterObj';
import DashboardObj from './donar-module/Dashboard';


function App() {
  return (
    <div className='min-h-screen bg-slate-900 p-7'> 
      <HeaderObj/>
      <DashboardObj/>
      <FooterObj/>
    </div>
  );
}

export default App;
