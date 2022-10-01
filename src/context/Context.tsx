import { FC, ReactNode, createContext, useContext, useState } from 'react';

import { IContext, INote } from '../types/note';

interface IContextProvider {
  children: ReactNode;
}

export const NoteContext = createContext<IContext | null>(null);

// компонент contextProvider хранит в себе состояние и бизнес логику приложения-модуля аналог сласса в mobX
export const NoteContextProvider: FC<IContextProvider> = ({ children }) => {
  const [noteList, setNote] = useState<INote[] | []>([]);
  const [searchedNotes, setSearchedNotes] = useState<INote[] | []>([]);
  const addNote = (newNote: INote) => {
    setNote([newNote, ...noteList]);
  };

  const removeNote = (noteId: number) => {
    setNote(noteList.filter(note => note.id !== noteId));
    setSearchedNotes(noteList.filter(note => note.id !== noteId));
  };

  const searchNote = (searchValue: string) => {
    const foundNotes = noteList.filter(note =>
      note.value.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchedNotes(foundNotes);
  };

  const contextValue = {
    noteList,
    addNote,
    removeNote,
    searchNote,
    searchedNotes,
  };
  return <NoteContext.Provider value={contextValue}>{children}</NoteContext.Provider>;
};

export const useNoteContext = () => useContext(NoteContext) as IContext;
