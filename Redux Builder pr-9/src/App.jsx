import React from 'react';
import AddNote from './components/AddKeep';
import ViewNotes from './components/ViewKeeps';

const App = () => {
  return (
    <div className="App">
      <h1 style={{ height:"80px",backgroundColor:"lightgreen",color:"white",textAlign:"center",lineHeight:"80px"}}>Google Keep</h1>
      <AddNote />
      <ViewNotes />
      <h5 style={{ height:"20px",backgroundColor:"lightgreen",color:"white",lineHeight:"20px",textAlign:"center",marginTop:"360px"}}>copyrights 2024</h5>
    </div>
  );
};

export default App;
