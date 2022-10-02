import { StyledContainer } from '../Note/Styled';
import { useNoteContext } from '../../context/Context';
import { NoteCard } from '../../components/NoteCard/NoteCard';

export const Basket = () => {
  const { basket, removeNote, editNote } = useNoteContext();
  return (
    <StyledContainer>
      {basket.map(note => (
        <NoteCard
          key={note.id}
          id={note.id}
          title={note.value}
          onEditNote={editNote}
          onDeleteCard={removeNote}
        />
      ))}
    </StyledContainer>
  );
};
