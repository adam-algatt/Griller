import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from  '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState }
      });
      
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

    return (
        <div className="login-box">
          <h2>Signup</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="user-box">
                <input 
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="username"
                  id="username"
                  value={formState.username}
                  onChange={handleChange}
                />
              </div>
              <div className="user-box">
                <input 
                  className="form-input" 
                  placeholder="Your email"
                  name="email"
                  type="email"
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
                <button type="submit">Submit</button>
            </form>
            {error && <div>Sign up failed</div>}
          </div>
    );
  }
  
export default Signup;