import styled from 'styled-components';
import { Navlink } from 'react-router-dom';

export const Nav = styled.div``;

export const Link = styled(Navlink)`
  display: inline-block;
  margin: 0 5px;
  text-decoration: none;
  color: #000;

  &:global(.active) {
    font-weigth: bold;
  }
`;
