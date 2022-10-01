import { FC } from 'react';

import { NoteCard } from '../../../../components/NoteCard/NoteCard';
import { INote } from '../../../../types/note';

interface Props {
  searchedNotes: INote[] | [];
  removeNote: (noteId: number) => void;
  onEditNote: (id: number, editValue: string) => void;
}

export const SearchList: FC<Props> = ({ searchedNotes, removeNote, onEditNote }) => (
  <>
    {searchedNotes.map(note => (
      <NoteCard
        onEditNote={onEditNote}
        id={note.id}
        onDeleteCard={removeNote}
        key={note.id}
        title={note.value}
      />
    ))}
  </>
);
