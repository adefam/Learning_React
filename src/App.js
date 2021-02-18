import React, { Fragment } from 'react';
import styled from 'styled-components';
import GlobalStyle from './theme/globalStyles';

const WelcomeText = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: rgb(26 32 44);
`;

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <WelcomeText>Welcome to the code-evaluation web app</WelcomeText>
      </Wrapper>
    </Fragment>
  );
};

export default App;
