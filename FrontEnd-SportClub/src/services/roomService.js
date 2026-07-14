import axios from "axios";
const API_URL = "http://localhost:3000/api/rooms";

export const getRooms = () => axios.get(API_URL);
export const createRoom = (data) => axios.post(API_URL, data);