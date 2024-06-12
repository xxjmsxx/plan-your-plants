import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // Get the CSRF token from the cookies
    const csrfToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("CSRF-TOKEN"))
      ?.split("=")[1];

    // If the CSRF token is found, set it in the request headers
    if (csrfToken) {
      config.headers["X-CSRF-Token"] = csrfToken;
    }

    return config; // Pass the modified request configuration
  },
  (error) => {
    return Promise.reject(error); // Handle request errors
  }
);

export default api;
