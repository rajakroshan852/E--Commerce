import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const registerUser = (data) => {
    return API.post("/auth/register", data);
};

export const loginUser = (data) => {
    return API.post("/auth/login", data);
};

export const getProducts = () => {
  return API.get("/products");
};
  
export const createOrder = (data) => {
  return API.post("/orders", data);
};

export const getMyOrders = (userId) => {
  return API.get(`/orders?user=${userId}`);
};

export const getProductById = (id) => {
  return API.get(`/products/${id}`);
};
export default API;