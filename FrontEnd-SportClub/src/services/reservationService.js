import axios from "axios";
const API_URL = "http://localhost:3000/api/reservations";

export const getReservations = (token) =>
  axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });

export const createReservation = (data, token) =>
  axios.post(API_URL, data, { headers: { Authorization: `Bearer ${token}` } });