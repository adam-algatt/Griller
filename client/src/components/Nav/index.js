import React from 'react';
<<<<<<< HEAD
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
          <Link to="/" className='title'>
            <span>Griller</span> 
           </Link>

            <nav className="text-center"> 
              <ul className='list'>
                  {Auth.loggedIn() ? (
                <>
                  <Link to="/profile" className="link">Me</Link>
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

=======

function Nav() {
  

  return (
    <header className='header'>
    <h2>
      <a href="/" className='title'>
        <span> Griller </span> 
      </a>
    </h2>
    <nav>
      <ul className='list'>
        <li>
          <a href="#login" className='link'>
            Login
          </a>
        </li>
        <li>
         <a href='#signup' className='link'>
            Signup
         </a>
        </li>
        <li>
            <a href='#recipes' className='link'>
                Recipes
            </a>
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default Nav;
>>>>>>> develop
