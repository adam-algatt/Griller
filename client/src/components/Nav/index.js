import React from 'react';

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