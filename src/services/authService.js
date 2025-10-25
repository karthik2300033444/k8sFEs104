import axios from "axios";

const API_URL = "http://localhost:30083/back1/auth";

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  localStorage.setItem("token", response.data);
  return response.data;
};

// 🌟 FIX: Added 'await' and returned 'response.data'
export const signup = async (username, email, password) => {
  const response = await axios.post(`${API_URL}/sign`, { username, email, password });
  return response.data; // Return the data upon successful signup
};

export const logout = () => {
  localStorage.removeItem("token");
};
