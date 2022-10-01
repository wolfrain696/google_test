import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';
import { Delete, EventNote } from '@mui/icons-material';

import { useNoteContext } from '../../context/Context';

const StyledSideBar = styled(Drawer)`
  & .MuiDrawer-paper {
    width: ${({ open }) => (open ? 156 : 64)}px;
    position: fixed;
    z-index: 0;
    top: 64px;
    left: 0;
    transition: 0.3s all ease;
  }
`;

export const SideBar = () => {
  const { isOpenSideBar } = useNoteContext();
  return (
    <StyledSideBar variant={'permanent'} open={isOpenSideBar}>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <EventNote />
          </ListItemIcon>
          <ListItemText>Заметки</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Delete />
          </ListItemIcon>
          <ListItemText>Карзина</ListItemText>
        </ListItemButton>
      </List>
    </StyledSideBar>
  );
};
