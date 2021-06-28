import React from 'react';
import './App.css';

import styled, { css } from 'styled-components';
import { colors } from './styles/global.js';

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
  border-radius: 100px;
  color: ${colors.black};
  background-color: ${colors.white};
  cursor: pointer;
  margin: 0 24px;
  font-size: 14px;
  text-decoration: none;

  ${(props) =>
    props.outline &&
    css`
      background: transparent;
      border: 1px solid ${colors.black};
    `}

  ${(props) =>
    props.primary &&
    css`
      background: ${colors.primary};
    `}
      ${(props) =>
    props.secondary &&
    css`
      background: ${colors.secondary};
    `}
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
