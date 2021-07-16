import React, { useRef } from 'react';
import { Redirect } from 'react-router-dom';

import { useLoginData } from '../contexts';

function Login() {
  const usernameRef = useRef();
  const patRef = useRef();

  const { loginData, setLoginData } = useLoginData();

  if (loginData != null) {
    return <Redirect to="/" />;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        fetch('https://api.github.com', {
          method: 'head',
          headers: { authorization: `Bearer ${patRef.current.value}` },
        }).then((response) => {
          if (response.ok && response.headers.get('X-OAuth-Scopes') === 'public_repo') {
            setLoginData({
              username: usernameRef.current.value,
              pat: patRef.current.value,
            });
          } else {
            alert('failed to use token');
          }
        });
      }}>
      <div>
        <label htmlFor="username">username</label>
        <input ref={usernameRef} id="username" type="text" />
      </div>
      <div>
        <label htmlFor="pat">PAT</label>
        <input ref={patRef} id="pat" type="password" />
      </div>
      <div>
        <button type="submit">Validate</button>
      </div>
    </form>
  );
}

export default Login;
