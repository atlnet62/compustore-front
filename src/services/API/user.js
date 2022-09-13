import axios from 'axios';

export const checkToken = async (token) => {
    try {
        return await axios.get("/api/v1/user/checkToken", { headers : {"x-access-token": token}})
    } catch (error) {
        return error.response;
    }
}

export const signup = async (datas) => {
    try {
        return await axios.post("/api/v1/user/signup", datas);
    } catch (error) {
        return error.response;
    }
}

export const signin = async (datas) => {
    try {
        return await axios.post("/api/v1/user/signin", datas);
    } catch (error) {
        return error.response;
    }
}