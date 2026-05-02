import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "";
axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,

  signup: async (userData) => {
    try {
      const res = await axios.post(`${API_URL}/api/auth/signup`, userData);
      set({ authUser: res.data.user });
      return { success: true, message: res.data.message };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Error signing up",
      };
    }
  },

  login: async (userData) => {
    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, userData);
      set({ authUser: res.data.user });
      return { success: true, message: "Logged in successfully" };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Error logging in",
      };
    }
  },

  logout: async () => {
    try {
      await axios.post(`${API_URL}/api/auth/logout`);
      set({ authUser: null });
      return { success: true, message: res.data.message };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Error logging out",
      };
    }
  },

  authCheck: async () => {
    try {
      const res = await axios.get(`${API_URL}/api/auth/authCheck`);
      set({ authUser: res.data.user, isCheckingAuth: false });
    } catch (error) {
      set({ authUser: null, isCheckingAuth: false });
    }
  },
}));
