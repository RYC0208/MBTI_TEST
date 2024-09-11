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
    const { token, isAuthenticated } = get();
    if (token && isAuthenticated) {
      const userData = await getUserProfile(token);
      set({ profile: userData });
    }
  },

  updateProfile: async (newNickname) => {
    const { profile, token } = get();
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
  },
}));

export default useAuthStore;
