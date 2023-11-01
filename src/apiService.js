const baseUrl = 'http://localhost:3001/api/v1';

// Fonction pour valider les informations de connexion de l'utilisateur.
export async function validateLogin(loginData) {
  try {
    // Effectuer une requête POST pour la connexion utilisateur.
    const response = await fetch(`${baseUrl}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Fonction pour récupérer le profil de l'utilisateur.
export async function getUserProfile(token) {
  try {
    // Effectuer une requête POST pour obtenir le profil utilisateur.
    const response = await fetch(`${baseUrl}/user/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Passer le token d'authentification dans les headers.
      },
      body: JSON.stringify(),
    });

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Fonction pour mettre à jour le nom d'utilisateur.
export async function updateUsername(token, newUsername) {
  try {
    // Effectuer une requête PUT pour mettre à jour le nom d'utilisateur.
    const response = await fetch(`${baseUrl}/user/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Passer le token d'authentification dans les headers.
      },
      body: JSON.stringify({ userName: newUsername }),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    if (data.status === 200) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}