import axiosInstance from './AxiosConfig';

export const apiDelete = async (type, query) => {
    try {
        switch (type) {
            case 1: break;
        }
        const response = await axiosInstance.delete(`/delete/${query}`);
        return response.data;
    } catch (error) {
        console.error("There was an error deleting the book!", error);
        throw error;
    }
};
