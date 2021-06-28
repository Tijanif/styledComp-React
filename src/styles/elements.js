import styled, { css } from 'styled-components';
import { colors } from './global.js';

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

export default Buttons;
