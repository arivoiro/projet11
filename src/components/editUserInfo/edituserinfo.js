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

  // Effet pour initialiser newUsername et originalUsername avec la valeur actuelle du nom d'utilisateur.
  useEffect(() => {
    setOriginalUsername(userName);
    setNewUsername(userName);
  }, [userName]);

  // Fonction pour gérer la sauvegarde des modifications
  const handleSave = async (e) => {
    e.preventDefault();

    // Vérification si le nouveau nom d'utilisateur n'est pas vide.
    if (newUsername.trim() === '') {
      setError('Le nom d\'utilisateur ne peut pas être vide.');
      return;
    }
  
    // Tente de mettre à jour le nom d'utilisateur.
    try {
      const response = await updateUsername(token, newUsername);
      if (response.status === 200) {
        dispatch(updateUserName(newUsername));
      }
    } catch (error) {
      return error;
    }
  };

  // Fonction pour annuler les modifications
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
