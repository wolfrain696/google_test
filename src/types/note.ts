export interface IContext {
  noteList: INote[] | [];
  addNote: (newNote: INote) => void;
  removeNote: (noteId: number) => void;
  onChangeSearchValue: (searchValue: string) => void;
  searchedNotes: INote[] | [];
  searchValue: string;
  cleanSearchList: () => void;
  editNote: (id: number, editValue: string) => void;
  isOpenSideBar: boolean;
  toggleOpenSideBar: () => void;
  basket: INote[] | [];
}

export interface INote {
  id: number;
  value: string;
}
