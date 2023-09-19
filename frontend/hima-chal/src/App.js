import logo from './logo.svg';
// import './App.css';
import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landingpage from './components/pages/Landingpage';
import Navbar from './components/Navbar'
import Loginpage from './components/pages/Loginpage';
// import Signupdriver from './components/pages/Signupdriver';
// import Signupinitial from './components/pages/Signupinitial';
// import Signup from './components/pages/Signup';
// import UserUi from './components/pages/UserUi';
// import Userrideui from './components/pages/Userrideui';
// import Driverrideui from './components/pages/Driverrideui';
// import Driverui from './components/pages/Driverui';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Landingpage />
        <Loginpage />
        {/* <Routes>
          <Route path="/Landingpage" element={<Landingpage />}></Route>
          <Route path="/Signupinitial" element={<Signupinitial />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Signupdriver" element={<Signupdriver />}></Route>
          <Route path="/Userui" element={<UserUi />}></Route>
          <Route path="/Userrideui" element={<Userrideui />}></Route>
          <Route path="/Driverrideui" element={<Driverrideui/>}></Route>
          <Route path="/Driverui" element={<Driverui/>}></Route>
        </Routes> */}
      </Router>
    </>
  );
}

export default App;
