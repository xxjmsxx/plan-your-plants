import api from "./api";

export const getMyGardensReq = async () => {
  const response = await api.get("/gardens");
  return response.data;
};

export const createGardenReq = async (gardenData) => {
  const response = await api.post("/gardens", gardenData);
  return response.data;
};

export const deleteGardenReq = async (gardenId) => {
  const response = await api.delete(`/gardens/${gardenId}`);
  return response.data;
};
