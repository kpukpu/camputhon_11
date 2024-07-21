import axiosInstance from './AxiosConfig';

export const apiGet = async (type, arg1) => {
    try {
        let response;
        switch (type) {
            case "userInfo":
                response = await axiosInstance.get(`/mypage/${arg1}`);
                break;
            case "bannerList":
                response = await axiosInstance.get(`/banner_list`);
                break;
        }

        return response.data;
    } catch (error) {
        console.error("There was an error getting things!", error);
        throw error;
    }
};
