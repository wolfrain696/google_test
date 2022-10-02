import React from 'react';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Note } from '../Note/Note';
import { NoteContextProvider } from '../../context/Context';
import { SearchAppBar } from '../../components/SearchAppBar/SearchAppBar';
import { SideBar } from '../../components/SideBar/SideBar';
import { Basket } from '../Basket/Basket';

const Root = () => (
  <NoteContextProvider>
    <SearchAppBar />
    <SideBar />
    <Container maxWidth={'lg'}>
      <Routes>
        <Route path="/basket" element={<Basket />} />
        <Route path="/*" element={<Note />} />
      </Routes>
    </Container>
  </NoteContextProvider>
);

export default Root;
