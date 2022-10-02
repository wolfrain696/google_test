import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';

import { IContext, INote } from '../types/note';
import useLocalStorage from '../hooks/useLocalStorage';

interface IContextProvider {
  children: ReactNode;
}

export const NoteContext = createContext<IContext | null>(null);

// компонент contextProvider хранит в себе состояние и бизнес логику приложения-модуля аналог сласса в mobX
export const NoteContextProvider: FC<IContextProvider> = ({ children }) => {
  const [searchedNotes, setSearchedNotes] = useState<INote[] | []>([]);
  const [searchValue, setSearchValue] = useState('');
  const [noteList, setNote] = useLocalStorage<INote[] | []>('noteList', []);
  const [basket, setBasket] = useLocalStorage<INote[] | []>('basket', []);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  useEffect(() => {
    if (searchValue) {
      const foundNotes = noteList.filter(note =>
        note.value.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchedNotes(foundNotes);
    }
  }, [searchValue]);

  const toggleOpenSideBar = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  const addNote = (newNote: INote) => {
    setNote([newNote, ...noteList]);
  };

  const removeNote = (noteId: number) => {
    const deletedNote = noteList.filter(note => note.id === noteId);
    setBasket([...basket, ...deletedNote]);
    setNote(noteList.filter(note => note.id !== noteId));
    setSearchedNotes(searchedNotes.filter(note => note.id !== noteId));
  };

  const onChangeSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const removeFromBasket = (noteId: number) => {
    setBasket(basket.filter(note => note.id !== noteId));
  };

  const editNote = (id: number, editValue: string) => {
    const editedNote = noteList.map(note =>
      note.id === id ? { ...note, value: editValue } : note
    );
    setNote(editedNote);
  };

  const cleanSearchList = () => {
    setSearchedNotes([]);
  };

  const contextValue = {
    toggleOpenSideBar,
    isOpenSideBar,
    editNote,
    noteList,
    addNote,
    removeNote,
    searchedNotes,
    onChangeSearchValue,
    searchValue,
    cleanSearchList,
    basket,
    removeFromBasket,
  };
  return <NoteContext.Provider value={contextValue}>{children}</NoteContext.Provider>;
};

export const useNoteContext = () => useContext(NoteContext) as IContext;
