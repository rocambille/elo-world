import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { useLoginData } from '../contexts';

function Logout() {
  const { setLoginData } = useLoginData();

  useEffect(() => {
    setLoginData(null);
  });

  return <Redirect to="/" />;
}

export default Logout;
