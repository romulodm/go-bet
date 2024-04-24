import axios from "axios";

const BASE_URL = import.meta.env.VITE_AUTH_BASE_URL;

export const requestConfig = axios.create({
  baseURL: BASE_URL,
});

requestConfig.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  const TOKEN = currentUser?.accessToken;

  if (TOKEN) {
    config.headers.token = `Bearer ${TOKEN}`;
    config.headers.user = user;
  }

  return config;
});

export default requestConfig;