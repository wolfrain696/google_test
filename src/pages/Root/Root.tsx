import React from 'react';
import { Container } from '@mui/material';

import { Note } from '../Note/Note';
import { NoteContextProvider } from '../../context/Context';
import { SearchAppBar } from '../../components/SearchAppBar/SearchAppBar';
import { SideBar } from '../../components/SideBar/SideBar';

const Root = () => (
  <NoteContextProvider>
    <SearchAppBar />
    <SideBar />
    <Container maxWidth={'lg'}>
      <Note />
    </Container>
  </NoteContextProvider>
);

export default Root;
