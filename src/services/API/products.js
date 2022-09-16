import axios from 'axios';
import formData from 'form-data'


export const getProducts = async () => {
    try {
        return await axios.get('api/v1/product/all');
    } catch (error) {
        return error;
    }
}

export const addProducts = async (datas) => {
    try {
        return await axios.post("/api/v1/product/add", datas);
    } catch (error) {
        return error.response;
    }
}

export const addImage = async (datas) => {
    
    console.log(datas);
    formData.append(datas);

    try {
        return await axios.post("/api/v1/product/Image/add", FormData, datas);
    } catch (error) {
        return error.response;
    }
}