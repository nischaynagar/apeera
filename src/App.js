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
}   
from 'react-router-dom';  
import Navbar from './components/Navbar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleCloseSidebar = () =>{
    setSidebarOpen(false);
  }
  return (
    <div className="App">
      <Router>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {sidebarOpen && <Sidebar handleCloseSidebar={handleCloseSidebar} />}
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
