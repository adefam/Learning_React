import React, { Fragment } from 'react';
import GlobalStyle from './theme/globalStyles';
import LandingPage from './components/Pages/LandingPage';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <LandingPage />
      </Router>
    </Fragment>
  );
};

export default App;
