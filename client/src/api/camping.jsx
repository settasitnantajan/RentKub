import axios from "axios";

export const createCamping = async (token, data) => {
  return await axios.post("http://localhost:3000/api/camping", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
