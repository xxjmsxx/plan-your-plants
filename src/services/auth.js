import api from "./api";

export const login = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    return response.data;
  } catch (error) {
    console.log("Sign in error", error);
  }
};

export const logout = async () => {
  try {
    await api.delete("/logout");
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await api.get("/current_user_info");
    return response.data;
  } catch (error) {
    console.error("Error fetching current user:", error);
  }
};

export const checkLoggedIn = async () => {
  try {
    const response = await api.get("/is_logged_in?");
    return response.data;
  } catch (error) {
    console.error("Error checking logged in status:", error);
  }
};
