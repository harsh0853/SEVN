import logo from './logo.svg';
import './App.css';
import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landingpage from './components/pages/Landingpage';
import Navbar from './components/Navbar'
import Userrideui from './components/pages/Userrideui';
import Driveruifinal from './components/pages/Driveruifinal';
import Login1 from "./components/pages/Login1";
import Useruifinal from './components/pages/Useruifinal';
import Driverridefinal from './components/pages/Driverridefinal';
import Userridefinal from './components/pages/Userridefinal';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Landingpage" element={<Landingpage />}></Route>
          <Route path="/Useruifinal" element={<Useruifinal />}></Route>
          <Route path="/Userrideui" element={<Userrideui />}></Route>
          <Route path="/Userridefinal" element={<Userridefinal />}></Route>
          <Route path="/Driverridefinal" element={<Driverridefinal />}></Route>
          <Route path="/Driveruifinal" element={<Driveruifinal />}></Route>
          <Route path="/Login1" element={<Login1 />}></Route>
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
