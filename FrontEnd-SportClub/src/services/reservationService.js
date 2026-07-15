import axios from "axios";

const API_URL = "http://localhost:3000/api/reservations";

const config = (token) => ({
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const getReservations = (token) =>
    axios.get(API_URL, config(token));

export const getReservationById = (id, token) =>
    axios.get(`${API_URL}/${id}`, config(token));

export const createReservation = (data, token) =>
    axios.post(API_URL, data, config(token));

export const updateReservation = (id, data, token) =>
    axios.put(`${API_URL}/${id}`, data, config(token));

export const deleteReservation = (id, token) =>
    axios.delete(`${API_URL}/${id}`, config(token));