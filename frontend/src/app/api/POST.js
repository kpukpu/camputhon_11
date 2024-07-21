import axiosInstance from './AxiosConfig';

export const apiPost = async (type, postThing) => {
    try {
        let response;
        switch (type) {
            case "updateUserBanner":
                response = await axiosInstance.post(`/update_banner/`, postThing);
                break;
        }
        return response.data;
    }
     catch (error) {
        console.error("There was an error posting the book!", error);
        throw error;
    }
};