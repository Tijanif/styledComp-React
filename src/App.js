import React from 'react';
import './App.css';

import styled from 'styled-components';
import Buttons from './styles/elements.js';

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

function App() {
  return (
    <div className='App'>
      <Container>
        <Subhead>Buttons</Subhead>
        <div className='row'>
          <Buttons>Playlist</Buttons>
          <Buttons outline>Playlist</Buttons>
          <Buttons primary>Playlist</Buttons>
          <Buttons secondary>Playlist</Buttons>
        </div>
        <Subhead>Seach Bar</Subhead>
      </Container>
    </div>
  );
}

export default App;
