import axios from "axios";
const API_URL = "http://localhost:3000/api/auth";

export const login = (email, password) =>
  axios.post(`${API_URL}/login`, { email, password });

export const register = (data) =>
  axios.post(`${API_URL}/register`, data);

export const getProfile = (token) =>
  axios.get(`${API_URL}/me`, {
    headers: { Authorization: `Bearer ${token}` }
  });