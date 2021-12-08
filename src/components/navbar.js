//import Logo from './images/logo.png';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';

export default function Navbar(){
  const isSession = (window.sessionStorage.getItem("isSession")==true)?true:false;
  const [actLogin, setactLogin] = useState(true);
  const [actReg, setactReg] = useState(true);
  const [actLogout, setactLogout] = useState(isSession);
  const liStyle = {color : 'blue', width: '40px'}
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container-fluid">
      <a className="navbar-brand" href="home">
      <img src='./images/logo.png' alt="Avatar Logo" style={liStyle} className="rounded-pill" /> 
    </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto"><h1>{isSession?'Hello World!':'Hello Karthik!'}</h1>
            {/* <li className="nav-item">
              <a className="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0)">Link</a>
            </li> */}
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="text" placeholder="Search" />
            <button className="btn btn-primary" type="button">Search</button>
          </form>
          <div>
          {(actLogin && !actLogout) ?
          <Link className="navbar-link" onClick={()=>{setactReg(true);setactLogin(false);}} to="login">Login</Link>
          : ''
          }
          {(actReg && !actLogout) ?
          <Link className="navbar-link" onClick={()=>{setactReg(false);setactLogin(true);}} to="register">Register</Link>
          : ''
          }
          {actLogout ?
          <Link className="navbar-link" onClick={()=>{setactReg(true);setactLogin(true);setactLogout(false)}} to="logout">Logout</Link>
          :''
          }

          </div>
        </div>
      </div>
    </nav>
    );
}