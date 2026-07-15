import axios from "axios";

const API_URL = "http://localhost:3000/api/class-schedules";


export const getSchedules = () =>
    axios.get(API_URL);


export const createSchedule = (data) =>
    axios.post(API_URL, data);


export const updateSchedule = (id,data) =>
    axios.put(`${API_URL}/${id}`,data);


export const deleteSchedule = (id) =>
    axios.delete(`${API_URL}/${id}`);