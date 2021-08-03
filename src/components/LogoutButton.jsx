import React from 'react';

import { useLoginData } from '../contexts';

function LogoutButton() {
  const { setLoginData } = useLoginData();

  return (
    <button className="link" type="button" onClick={() => setLoginData(null)}>
      Logout
    </button>
  );
}

export default LogoutButton;
