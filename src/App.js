import React from 'react';
import './App.css';

import styled from 'styled-components';

const Container = styled.div`
  width: 1280px;
  min-width: 1280px;
  margin: 0 auto;
  .row {
    width: 100px;
    display: flex;
    align-content: center;
  }
`;

const Subhead = styled.h3`
  font-size: 25px;
  font-weight: 600;
  margin: 160px 0 48px;
`;
const Buttons = styled.a`
  height: 48px;
  line-height: 48px;
  padding: 0 64px;
  font-weight: 600;
  color: #000;
`;

function App() {
  return (
    <div className='App'>
      <Container>
        <Subhead>Buttons</Subhead>
        <Subhead>Seach Bar</Subhead>
      </Container>
    </div>
  );
}

export default App;
