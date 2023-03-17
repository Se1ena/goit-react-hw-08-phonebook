import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.div``;

export const Link = styled(NavLink)`
  display: inline-block;
  margin: 0 5px;
  text-decoration: none;
  color: #000;

  &:global(.active) {
    font-weigth: bold;
  }
`;
