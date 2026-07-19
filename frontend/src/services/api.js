import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

API.interceptors.request.use((config) => {
  API.interceptors.request.use((config) => {
  const authStorage = localStorage.getItem("auth-storage");

  if (authStorage) {
    const { state } = JSON.parse(authStorage);

    if (state.token) {
      config.headers.Authorization = `Bearer ${state.token}`;
    }
  }

  return config;
});

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;