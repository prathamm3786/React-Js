import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../redux/actions';

const ViewNotes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <div className="view-card" style={{  display: 'flex', flexDirection:" column", alignItems:"center"}}>
        <div>
     
     {notes.length > 0 ? (
       <ul>
         {notes.map((note) => (
           <li
           style={{display: 'flex', flexDirection:" column", alignItems:"center", padding: '15px', width:"350px" ,borderRadius:"15px", boxShadow: "5px 8px 5px #888888",marginTop:"20px"}}
           key={note.id}>
             {note.content}{' '}
             <button style={{width:"150px", fontSize:"16px",border:"0",background:"lightgreen", color:"white",borderRadius:"5px",padding:"10px",margin:"20px 20px 0"}} onClick={() => handleDeleteNote(note.id)}>Delete Note</button>
           </li>
         ))}
       </ul>
     ) : (
       <p style={{color:"gray",marginTop:"30px"}}>No notes available.</p>
     )}
   </div>
    </div>
  );
};

export default ViewNotes;
