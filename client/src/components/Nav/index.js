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
      <div className="container flex-row justify-space-between-lg justify-center align-center">
          <Link to="/home" className='title'>
            <span>Griller</span> 
           </Link>

            <nav className="text-center"> 
              <ul className='list'>
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
       </div> 
  </header>
  );
};

export default Nav;


