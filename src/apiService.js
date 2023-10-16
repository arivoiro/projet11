class ApiService {
  baseUrl = 'http://localhost:3001/api/v1';

  async validateLogin(loginData) {
    try {
      const response = await fetch(`${this.baseUrl}/user/login`, {
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
}

// eslint-disable-next-line
export default new ApiService();
