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

API.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("auth-storage");

      window.location.href = "/login?expired=true";
    }

    return Promise.reject(error);
  }
);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;