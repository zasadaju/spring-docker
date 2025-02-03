import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://20.121.42.213:8080",
  headers: { "Content-Type": "application/json" },
  withCredentials: true 
});

export default apiClient;