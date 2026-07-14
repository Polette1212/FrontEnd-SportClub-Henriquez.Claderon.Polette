import axios from "axios";
const API_URL = "http://localhost:3000/api/classSchedules";

export const getSchedules = () => axios.get(API_URL);
export const createSchedule = (data) => axios.post(API_URL, data);