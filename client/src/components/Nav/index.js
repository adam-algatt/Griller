import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Nav = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
    };



  return (
    <header>
      <nav>
          <Link to="/home" className='title'>
            <span>Griller</span> 
           </Link>
              <ul>
                  {Auth.loggedIn() ? (
                <>
                  <Link to="/profile" className="link">Profile</Link>
                  <a href="/" className="link" onClick={logout}>
                    Logout
                  </a>
                </>
                ) : (
                <>
                  <Link to="/login" className='link'>Login</Link> 
                  <Link to="/signup" className='link'>Signup</Link>
                </>
                )}
                  <Link to="/recipes" className='link'>Recipes</Link>
              </ul>
          </nav>
  </header>
  );
};

export default Nav;


