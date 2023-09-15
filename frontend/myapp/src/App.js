import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Signup from './pages/Signup';
import Signupdriver from './pages/Signupdriver';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/Signupdriver" element={<Signupdriver/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
