import axios from "axios";
const API_URL = "http://localhost:3000/api/coaches";

export const getCoaches = () => axios.get(API_URL);
export const createCoach = (data) => axios.post(API_URL, data);