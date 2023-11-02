import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName, selectFirstName, selectLastName, updateUserName, selectToken } from '../../features/auth/authSlice';
import { updateUsername } from '../../apiService';
import './edituserinfo.css';


function EditUserInfo() {
  const userName = useSelector(selectUserName);
  const firstName = useSelector(selectFirstName);
  const lastName = useSelector(selectLastName);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  
  const [newUsername, setNewUsername] = useState('');
  const [error, setError] = useState('');
  const [originalUsername, setOriginalUsername] = useState('');

  // Effect to initialize newUsername and originalUsername with the current value of the username.
  useEffect(() => {
    setOriginalUsername(userName);
    setNewUsername(userName);
  }, [userName]);

  // Function to handle saving changes
  const handleSave = async (e) => {
    e.preventDefault();

    // Check if the new username is not empty.
    if (newUsername.trim() === '') {
      setError('Le nom d\'utilisateur ne peut pas être vide.');
      return;
    }
  
    // Attempt to update the username.
    try {
      const response = await updateUsername(token, newUsername);
      if (response.status === 200) {
        dispatch(updateUserName(newUsername));
      }
    } catch (error) {
      return error;
    }
  };

  // Function to cancel changes
  const handleCancel = () => {
    setNewUsername(originalUsername);
  };
  
  return (     
    <div className="headerEditUserInfo">
        <h1>Edit user info</h1>
        <form onSubmit={handleSave}>
            <div className="input-wrapper-user-info">
                <label htmlFor='user-name'>User name :</label>
                <input
                type="text"
                id="user-name"
                placeholder={userName || "userName"}
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                />
            </div>
            <div className="input-wrapper-user-info">
                <label htmlFor='first-name'>First name :</label>
                <input
                type="text"
                id="first-name"
                disabled
                placeholder={firstName || "firstName"}
                />
            </div>
            <div className="input-wrapper-user-info">
                <label htmlFor='last-name'>Last name :</label>
                <input
                type="text"
                id="last-name"
                disabled
                placeholder={lastName || "lastName"}
                />
            </div>
            {error && (
              <p className="error-message">{error}</p>
            )}
            <div>
                <button type="submit" className="edit-user-button save">
                    Save
                </button>
                <button type="button" className="edit-user-button cancel" onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </form>
    </div>
  );
}

export default EditUserInfo;
