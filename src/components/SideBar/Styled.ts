import { Drawer, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const StyledSideBar = styled(Drawer)`
  & .MuiDrawer-paper {
    width: ${({ open }) => (open ? 156 : 64)}px;
    position: fixed;
    z-index: 0;
    top: 64px;
    left: 0;
    transition: 0.3s all ease;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
`;
