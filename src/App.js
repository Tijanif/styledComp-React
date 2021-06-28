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

function App() {
  return (
    <div className='App'>
      <Container>Hello</Container>
    </div>
  );
}

export default App;
