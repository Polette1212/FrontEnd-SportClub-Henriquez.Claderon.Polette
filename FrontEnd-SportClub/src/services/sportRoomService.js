import axios from "axios";

const API_URL = "http://localhost:3000/api/sport-rooms";

const config = (token) => ({
    headers: {
        Authorization: `Bearer ${token}`
    }
});


export const getSportRooms = (token) =>
    axios.get(API_URL, config(token));


export const getSportRoomById = (id, token) =>
    axios.get(`${API_URL}/${id}`, config(token));


export const createSportRoom = (data, token) =>
    axios.post(API_URL, data, config(token));


export const updateSportRoom = (id, data, token) =>
    axios.put(`${API_URL}/${id}`, data, config(token));


export const deleteSportRoom = (id, token) =>
    axios.delete(`${API_URL}/${id}`, config(token));