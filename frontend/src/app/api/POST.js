import axiosInstance from './AxiosConfig';

export const apiPost = async (type, postThing) => {
    try {
        let response;
        switch (type) {
            case "cal" :
                console.log("POST 도전")
                response = await axiosInstance.post('/calculate/', postThing);
                break;
        }
        return response.data;
    } catch (error) {
        console.error("There was an error posting the book!", error);
        throw error;
    }
};