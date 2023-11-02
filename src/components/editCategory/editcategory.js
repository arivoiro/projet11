import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EditCategory = ({ category, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [newCategory, setNewCategory] = useState(category);

  // Handle category change
  const handleCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  // Save the new category
  const saveCategory = () => {
    onUpdate(newCategory);
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <div>
          <select value={newCategory} onChange={handleCategoryChange}>
            <option value="Food">Food</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
          <button onClick={saveCategory}>Save</button>
        </div>
      ) : (
        <div>
          {category}
          <FontAwesomeIcon icon="fa-solid fa-pencil" onClick={() => setEditing(true)}/>
        </div>
      )}
    </div>
  );
};

export default EditCategory;
