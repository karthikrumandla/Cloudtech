import { Navigate } from "react-router-dom";
import { useState } from "react";
export default function Login({setSessionLogin}){
  const [state , setState] = useState({
    username : "",
    password : ""
})
const handleLogin = (e) => {
  e.preventDefault();
  window.sessionStorage.setItem("isSession", true);
  setSessionLogin(true);
  //return <Navigate to="home" />
  
  
};

const handleChange = (e) => {
  const {id , value} = e.target   
  setState(prevState => ({
      ...prevState,
      [id] : value
  }))
}


  
    const formStyle = {marginRight : 'auto',marginLeft : 'auto', width: '300px', padding:'10px'}
    return (
        <form action="main"  method='POST' className="card" style={formStyle}>
  <div className="mb-3 mt-3">
    <label htmlFor="username" className="form-label">Username:</label>
    <input type="username" className="form-control" id="username" placeholder="User email" name="username" 
    onChange={handleChange} value={state.username} />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">Password:</label>
    <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" />
  </div>
  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" /> Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleLogin} >Login</button>
</form>
    );
}