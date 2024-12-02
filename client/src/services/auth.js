const BASE_URL = "https://api.freeapi.app/api/v1/users";

export const loginUser = async (credentials) => {
  console.log(credentials, "credentials");
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (userData) => {
  console.log(userData, "userData");
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
