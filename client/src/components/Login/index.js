import React from 'react';

function Login() {

    return (
        <div className="login-box">
  <h2>Login</h2>
  <form>
    <div className="user-box">
      <label>Username</label>
      <input className="form-input" />
    </div>
    <div className="user-box">
      <label>Password</label>
      <input className="form-input" />
    </div>
    <a href="#login">
      Submit
    </a>
  </form>
</div>
      
    );
  }
  
  export default Login;