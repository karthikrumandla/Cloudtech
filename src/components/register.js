

export default function Register(){
    const formStyle = {marginRight : 'auto',marginLeft : 'auto', width: '300px', padding:'10px'}
    return (
        <form action="/action_page.php" className="card" style={formStyle}>
  <div className="mb-3 mt-3">
    <label htmlFor="username" className="form-label">Username:</label>
    <input type="text" className="form-control" id="username" placeholder="User email" name="username" />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" />
  </div>
  <div className="mb-3">
    <label htmlFor="cpwd" className="form-label">Confirm Password:</label>
    <input type="cpassword" className="form-control" id="cpwd" placeholder="Confirm password" name="cpwd" />
  </div>
  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" /> Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-warning">Register</button>
</form>
    );
}