import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
});

export const getEmployees = async () => {
  const response = await api.get("/users?limit=20");

  return response.data.users;
};

export default api;