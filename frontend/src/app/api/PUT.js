import axiosInstance from "./AxiosConfig";

export const apiPut = async (type, putThing) => {
    try {
        let response;
        switch (type) {
            case "updateUserBanner":
                response = await axiosInstance.put(`/update_banner`, putThing);
                break;
        }
        return response.data;
    } catch (error) {
        console.error("API PUT 요청 실패:", error);
        if (error.response) {
            console.error("서버 응답:", error.response.data);
            console.error("상태 코드:", error.response.status);
        } else if (error.request) {
            console.error("응답 없음");
        } else {
            console.error("Error", error.message);
        }
        throw error;
    }
};