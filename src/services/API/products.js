import axios from "axios";

export const getProducts = async () => {
    try {
        return await axios.get("/api/v1/product/all");
    } catch (error) {
        return error;
    }
};

export const addProducts = async (product, TOKEN) => {
    try {
        return await axios.post("/api/v1/product/add", product, { headers : {"x-access-token": TOKEN}});
    } catch (error) {
        return error.response;
    }
};

export const addImage = async (image, TOKEN) => {

    try {
        return await axios.post("/api/v1/product/Image/add", image, { headers : {"x-access-token": TOKEN}});
    } catch (error) {
        return error.response;
    }
};
