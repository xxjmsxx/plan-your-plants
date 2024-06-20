import api from "./api";

export const getMyPlants = async () => {
  const response = await api.get("/plants");
  return response.data;
};
