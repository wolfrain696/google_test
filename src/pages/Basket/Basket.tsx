import { StyledContainer, StyledListWrapper } from '../../styles/styles';
import { useNoteContext } from '../../context/Context';
import { NoteCard } from '../../components/NoteCard/NoteCard';

export const Basket = () => {
  const { basket, removeFromBasket, editNote, addNote } = useNoteContext();

  return (
    <StyledContainer maxWidth={'md'}>
      <StyledListWrapper>
        {basket.map(note => (
          <NoteCard
            isBasket
            onRestoreNote={() => addNote(note)}
            key={note.id}
            id={note.id}
            title={note.value}
            onEditNote={editNote}
            onDeleteCard={removeFromBasket}
          />
        ))}
      </StyledListWrapper>
    </StyledContainer>
  );
};
