import axios from "axios";


const API_URL="http://localhost:3000/api/rooms";


const config=(token)=>({
 headers:{
   Authorization:`Bearer ${token}`
 }
});


export const getRooms=(token)=>
 axios.get(API_URL,config(token));


export const createRoom=(data,token)=>
 axios.post(API_URL,data,config(token));


export const updateRoom=(id,data,token)=>
 axios.put(`${API_URL}/${id}`,data,config(token));


export const deleteRoom=(id,token)=>
 axios.delete(`${API_URL}/${id}`,config(token));