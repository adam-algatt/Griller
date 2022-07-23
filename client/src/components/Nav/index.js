import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Nav = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
    };



  return (
    <header className='header'>
          <nav> 
              <span>
                <Link to="/home" className='title'>Griller</Link>
              </span>
              <ul>
                  {Auth.loggedIn() ? (
                <>
                  <a href="/" className="link" onClick={logout}>
                    Logout
                  </a>
                  <Link to="/profile" className="link">Profile</Link>
                </>
                ) : (
                <>
                  <Link to="/login" className='link'>Login</Link> 
                  <Link to="/signup" className='link'>Signup</Link>
                </>
                )}
                  <Link to="/recipes" className='link'>Recipes</Link>
                  <Link to="/gear" className='link'>Gear</Link>
              </ul>
          </nav>
  </header>
  );
};

export default Nav;


