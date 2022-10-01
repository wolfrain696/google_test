export interface IContext {
  noteList: INote[] | [];
  addNote: (newNote: INote) => void;
  removeNote: (noteId: number) => void;
  searchNote: (searchValue: string) => void;
  searchedNotes: INote[] | [];
}

export interface INote {
  id: number;
  value: string;
}
