import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/actions';

const AddNote = () => {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (note.trim()) {
      const newNote = {
        id: Date.now(),
        content: note,
      };
      dispatch(addNote(newNote));
      setNote('');
    }
  };

  return (
    <div className="card" style={{  display: 'flex', flexDirection:" column", alignItems:"center"}}>
        <div style={{  display: 'flex', flexDirection:" column", alignItems:"center", padding: '15px', width:"360px" ,borderRadius:"15px", boxShadow: "5px 8px 5px #888888",marginTop:"30px"}}>
<textarea
style={{width:"360px",border:"0",padding:"10px"}}
  type="textarea"
  value={note}
  onChange={(e) => setNote(e.target.value)}
  placeholder="Enter your note"
/>
<button style={{width:"150px", fontSize:"16px",border:"0",background:"lightgreen", color:"white",borderRadius:"5px",padding:"10px"}} onClick={handleAddNote}>Add Note</button>
</div>
    </div>
  );
};

export default AddNote;
