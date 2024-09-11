import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const registerApi = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("회원가입 실패", error);
  }
};

export const apiLogin = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error("로그인 실패", error);
  }
};

export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("에러에러");
  }
};

export const updateProfile = async (token, formData) => {
  try {
    const response = await axios.patch(`${API_URL}/profile`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("프로필 업데이트 실패:", error);
  }
};
