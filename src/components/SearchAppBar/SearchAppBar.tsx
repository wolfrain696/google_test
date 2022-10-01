import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent } from 'react';

import { useNoteContext } from '../../context/Context';

import { StyledInputBase, StyledSearch, StyledSearchIconWrapper } from './Styled';

export const SearchAppBar = () => {
  const { searchNote } = useNoteContext();
  const handleSearchNote = (e: ChangeEvent<HTMLInputElement>) => {
    searchNote(e.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Keep test
          </Typography>
          <StyledSearch>
            <StyledSearchIconWrapper>
              <SearchIcon />
            </StyledSearchIconWrapper>
            <StyledInputBase placeholder="Search…" onChange={handleSearchNote} />
          </StyledSearch>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
