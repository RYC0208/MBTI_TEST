import { create } from "zustand";
import {
  registerApi,
  apiLogin,
  getUserProfile,
  updateProfile,
} from "../api/auth";

//persistStore 로컬 스토리지 관리

const useAuthStore = create((set, get) => ({
  user: JSON.parse(localStorage.getItem("user")),
  isAuthenticated: !!localStorage.getItem("token"),
  token: null,
  profile: null,

  login: async (formData) => {
    const response = await apiLogin(formData);
    localStorage.setItem("token", response.accessToken);
    localStorage.setItem("user", JSON.stringify(response));
    set({ isAuthenticated: true, token: response.accessToken, user: response });
    return response;
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ isAuthenticated: false, user: null, token: null });
  },

  register: async (formData) => {
    const response = await registerApi(formData);
    return response;
  },

  fetchProfile: async () => {
    try {
      const { token, isAuthenticated } = get();
      if (token && isAuthenticated) {
        const userData = await getUserProfile(token);
        set({ profile: userData });
      }
    } catch (error) {
      console.log("프로필 정보를 가져오지 못했습니다 : ", error);
      throw error;
    }
  },

  updateProfile: async (newNickname) => {
    const { profile, token } = get();
    try {
      const formData = new FormData();
      formData.append("nickname", newNickname);

      const response = await updateProfile(token, formData);
      if (response.success) {
        set({
          profile: {
            ...profile,
            nickName: response.nickname,
          },
        });
        return response.success;
      } else {
        return response.success;
      }
    } catch (error) {
      console.error("프로필 수정 에러 =>", error);
    }
  },
}));

export default useAuthStore;
