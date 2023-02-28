import { useState } from 'react';
import './App.css';
import Farming from './components/Farming';
import Home from './components/Home';
import MysteryBox from './components/MysteryBox';
import Sidebar from './components/Sidebar';
import Token from './components/Token';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link,
}   
from 'react-router-dom';  

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const handleCloseSidebar = () =>{
    setSidebarOpen(false);
  }
  const handleOpenSidebar = () =>{
    setSidebarOpen(true);
  }
  return (
    <div className="App">
      <Router>
      {sidebarOpen && <Sidebar handleCloseSidebar={handleCloseSidebar} />}
      <div onClick={handleOpenSidebar} className="sidebarOpenBtn">Open Sidebar</div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/token" element={<Token/>}/>
          <Route exact path="/farming" element={<Farming/>}/>
          <Route exact path="/mysterybox" element={<MysteryBox/>}/>
        </Routes> 
      </Router>
      
    </div>
  );
}

export default App;
