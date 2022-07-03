import React from 'react';

function Signup() {

    return (
        <div className="login-box">
  <h2>Signup</h2>
  <form>
    <div className="user-box">
      <label>Username</label>
      <input className="form-input" />
    </div>
    <div className="user-box">
      <label>Password</label>
      <input className="form-input" />
    </div>
    <a href="#signup">
      Submit
    </a>
  </form>
</div>
      
    );
  }
  
  export default Signup;