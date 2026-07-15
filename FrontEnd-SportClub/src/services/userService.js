import axios from "axios";

const API_URL = "http://localhost:3000/api/users";

const authConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Obtener todos los usuarios
export const getUsers = (token) =>
  axios.get(API_URL, authConfig(token));

// Obtener un usuario por ID
export const getUserById = (id, token) =>
  axios.get(`${API_URL}/${id}`, authConfig(token));

// Crear usuario
export const createUser = (data, token) =>
  axios.post(API_URL, data, authConfig(token));

// Actualizar usuario
export const updateUser = (id, data, token) =>
  axios.put(`${API_URL}/${id}`, data, authConfig(token));

// Eliminar usuario
export const deleteUser = (id, token) =>
  axios.delete(`${API_URL}/${id}`, authConfig(token)); 