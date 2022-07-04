// import required modules
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    
    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
        <div className="login-box">
          <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="user-box">
                
                  <input 
                    className="form-input" 
                    placeholder="Your email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                 <div className="user-box">
         
                    <input 
                      className="form-input"
                      placeholder="Password"
                      name="password"
                      type="password"
                      id="password" 
                      value={formState.password}
                      onChange={handleChange}
                    />
                  </div>
                  <button>Submit</button>
            </form>
            {error && <div>Login failed</div>}
          </div>
    );
}
  
export default Login;
