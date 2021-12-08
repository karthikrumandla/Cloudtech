import React,{useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import {Button, Col} from 'react-bootstrap';
import Login from './components/login';
import Register from './components/register';
import Navbar from './components/navbar';
import Main from './components/main';

function App() {
  const isSession = (window.sessionStorage.getItem("isSession")==true)?true:false;
  const [state, setstate] = useState(isSession);
  return (
    <div className="App">
      <Navbar />
      {(state == true) ?
        
            <Main />
        
      :
      <Routes >

        <Route path="login" element={<Login  setSessionLogin={setstate} />} />
        
        <Route path="register" element={<Register />} />
      
        
      </Routes>
      }
      </div>
  );
}

export default App;
