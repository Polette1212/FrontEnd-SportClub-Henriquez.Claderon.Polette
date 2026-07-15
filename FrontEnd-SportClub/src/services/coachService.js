import axios from "axios";

const API_URL = "http://localhost:3000/api/coach";

const config = (token) => ({
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const getCoaches = (token) =>
    axios.get(API_URL, config(token));

export const createCoach = (data, token) =>
    axios.post(API_URL, data, config(token));

export const updateCoach = (id, data, token) =>
    axios.put(`${API_URL}/${id}`, data, config(token));

export const deleteCoach = (id, token) =>
    axios.delete(`${API_URL}/${id}`, config(token));