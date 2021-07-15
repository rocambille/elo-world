import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import { LoginDataProvider, MovieListProvider } from './contexts';
import Routes from './pages';

function App() {
  return (
    <LoginDataProvider>
      <MovieListProvider>
        <Router>
          <Navbar />
          <main>
            <Routes />
          </main>
        </Router>
      </MovieListProvider>
    </LoginDataProvider>
  );
}

export default App;
