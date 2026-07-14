import axios from "axios";
const API_URL = "http://localhost:3000/api/members";

export const getMembers = () => axios.get(API_URL);
export const createMember = (data) => axios.post(API_URL, data);