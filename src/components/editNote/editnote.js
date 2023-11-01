import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EditNote = ({ note, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [newNote, setNewNote] = useState(note);

  // Gérer le changement de la note
  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  // Sauvegarder la nouvelle note
  const saveNote = () => {
    onUpdate(newNote);
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <div>
          <input type="text" value={newNote} onChange={handleNoteChange} />
          <button onClick={saveNote}>Save</button>
        </div>
      ) : (
        <div>
          {note}
          <FontAwesomeIcon icon="fa-solid fa-pencil" onClick={() => setEditing(true)}/>
        </div>
      )}
    </div>
  );
};

export default EditNote;
