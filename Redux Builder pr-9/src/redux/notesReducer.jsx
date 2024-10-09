import { ADD_NOTE, DELETE_NOTE } from './actions';

// Retrieve notes from localStorage
const initialState = {
  notes: JSON.parse(localStorage.getItem('notes')) || [],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const updatedNotesAdd = [...state.notes, action.payload];
      localStorage.setItem('notes', JSON.stringify(updatedNotesAdd));
      return { ...state, notes: updatedNotesAdd };

    case DELETE_NOTE:
      const updatedNotesDelete = state.notes.filter(
        (note) => note.id !== action.payload
      );
      localStorage.setItem('notes', JSON.stringify(updatedNotesDelete));
      return { ...state, notes: updatedNotesDelete };

    default:
      return state;
  }
};
