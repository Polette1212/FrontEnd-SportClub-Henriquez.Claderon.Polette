import axios from "axios";
const API_URL = "http://localhost:3000/api/users";

export const getUsers = (token) =>
  axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });

export const createUser = (data, token) =>
  axios.post(API_URL, data, { headers: { Authorization: `Bearer ${token}` } });