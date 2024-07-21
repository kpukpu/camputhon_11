import axios from 'axios';

const API_URL = 'http://localhost:8000/api/banner_list/';
const UPDATE_URL = 'http://localhost:8000/api/update_banner/';
const UPDATE_USER_BANNER_URL = 'http://localhost:8000/api/update_user_banner/';  // 새로운 URL

export const getBanners = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const updateBanner = async (id, banner) => {
  const response = await axios.put(`${UPDATE_URL}${id}/`, banner);
  return response.data;
};

export const updateUserBanner = async (googleId, bannerUrl) => {
  const response = await axios.put(`${UPDATE_USER_BANNER_URL}${googleId}/`, { banner: bannerUrl });
  return response.data;
};

