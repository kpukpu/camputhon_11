import axiosInstance from './AxiosConfig';

export const apiPut = async (type, query, putThing) => {
    try {
        let response;
        switch (type) {
            case "updateUserBanner":
                response = await axiosInstance.put(`/update`, putThing);
                break;
        }
        return response.data;
    } catch (error) {
        console.error("There was an error updating the book!", error);
        throw error;
    }
};
