import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Delete, EventNote } from '@mui/icons-material';

import { useNoteContext } from '../../context/Context';

import { StyledNavLink, StyledSideBar } from './Styled';

export const SideBar = () => {
  const { isOpenSideBar } = useNoteContext();
  return (
    <StyledSideBar variant={'permanent'} open={isOpenSideBar}>
      <List>
        <StyledNavLink to="/">
          <ListItemButton>
            <ListItemIcon>
              <EventNote />
            </ListItemIcon>
            <ListItemText>Заметки</ListItemText>
          </ListItemButton>
        </StyledNavLink>
        <StyledNavLink to="basket">
          <ListItemButton>
            <ListItemIcon>
              <Delete />
            </ListItemIcon>
            <ListItemText>Карзина</ListItemText>
          </ListItemButton>
        </StyledNavLink>
      </List>
    </StyledSideBar>
  );
};
