import api from "./api";

export const getMyGardens = async () => {
  const response = await api.get("/gardens");
  return response.data;
};
