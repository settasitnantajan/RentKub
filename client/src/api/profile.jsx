import axios from "axios";

export const createProfile = async (token, data) => {
    console.log(token, data, 'create profile client');
    return await axios.post("http://localhost:3000/api/profile", data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }); 
};
