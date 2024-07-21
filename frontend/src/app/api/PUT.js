import axiosInstance from './AxiosConfig';

export const apiPut = async (type, query, putThing) => {
    try {
        switch (type) {
            case 1: break;
        }
        const response = await axiosInstance.put(`/put/${query}/`, putThing);
        return response.data;
    } catch (error) {
        console.error("There was an error updating the book!", error);
        throw error;
    }
};
