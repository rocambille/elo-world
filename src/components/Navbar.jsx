import React from 'react';
import { NavLink } from 'react-router-dom';

import SaveButton from '../components/SaveButton';
import { useLoginData } from '../contexts';

const link = (path, text) => (
  <li>
    <NavLink to={path} exact activeClassName="active" className="link">
      {text}
    </NavLink>
  </li>
);

function Navbar() {
  const { loginData } = useLoginData();

  return (
    <nav>
      <ul>
        {link('/', 'Home')}
        {link('/play', 'Play')}
        {link('/search', 'Search')}
        {loginData == null ? (
          link('/login', 'Login')
        ) : (
          <>
            <li>
              <SaveButton />
            </li>
            {link('/logout', 'Logout')}
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
