import axiosInstance from './AxiosConfig';

export const apiGet = async (type) => {
    try {
        switch (type) {
            case 1: break;
        }
        const response = await axiosInstance.get('/get');
        return response.data;
    } catch (error) {
        console.error("There was an error getting things!", error);
        throw error;
    }
};
