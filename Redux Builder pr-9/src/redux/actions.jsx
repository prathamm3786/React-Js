export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

// Action to add a note
export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

// Action to delete a note
export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
});
