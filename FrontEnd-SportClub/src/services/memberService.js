import axios from "axios";

const API_URL = "http://localhost:3000/api/member";

const config = (token) => ({
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const getMembers = (token) =>
    axios.get(API_URL, config(token));

export const createMember = (data, token) =>
    axios.post(API_URL, data, config(token));

export const updateMember = (id, data, token) =>
    axios.put(`${API_URL}/${id}`, data, config(token));

export const deleteMember = (id, token) =>
    axios.delete(`${API_URL}/${id}`, config(token));