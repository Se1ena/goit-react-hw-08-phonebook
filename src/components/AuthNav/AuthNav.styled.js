import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.div``;

export const LinkRegister = styled(NavLink)`
  display: inline-block;
  margin: 0 5px;

  text-decoration: none;
  font-weight: 600;
  color: #838383;

  &.active {
    color: #0000ffb8;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color:  rgb(255, 228, 59);
  }
`;

export const LinkLogin = styled(NavLink)`
  display: inline-block;
  margin: 0 5px;

  text-decoration: none;
  font-weight: 600;
  color: #838383;

  &.active {
    color: #0000ffb8;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color:  rgb(255, 228, 59);
  }
`;