import axios from "axios";
const API_URL = "http://localhost:3000/api/sportRooms";

export const getSportRooms = () => axios.get(API_URL);
export const createSportRoom = (data) => axios.post(API_URL, data);