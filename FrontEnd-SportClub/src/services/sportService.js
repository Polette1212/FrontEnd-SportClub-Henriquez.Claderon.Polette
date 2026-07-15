import axios from "axios";

const API_URL = "http://localhost:3000/api/sports";

const config = (token) => ({
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const getSports = (token) =>
    axios.get(API_URL, config(token));

export const createSport = (data, token) =>
    axios.post(API_URL, data, config(token));

export const updateSport = (id, data, token) =>
    axios.put(`${API_URL}/${id}`, data, config(token));

export const deleteSport = (id, token) =>
    axios.delete(`${API_URL}/${id}`, config(token));