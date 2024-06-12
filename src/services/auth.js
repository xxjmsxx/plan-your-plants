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
