import { create } from "zustand";
import axios from "axios";

export const useProductStore = create((set) => ({
  products: [],

  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      const res = await axios.post("/api/products", newProduct);

      set((state) => ({
        products: [...state.products, res.data.data],
      }));

      return { success: true, message: "Product created successfully" };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Error creating product",
      };
    }
  },

  fetchProducts: async () => {
    try {
      const res = await axios.get("/api/products");

      set({ products: res.data.data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  deleteProduct: async (pid) => {
    try {
      const res = await axios.delete(`/api/products/${pid}`);

      if (!res.data.success) {
        return { success: false, message: res.data.message };
      }

      set((state) => ({
        products: state.products.filter((product) => product._id !== pid),
      }));

      return { success: true, message: res.data.message };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Error deleting product",
      };
    }
  },

  updateProduct: async (pid, updatedProduct) => {
    try {
      const res = await axios.put(`/api/products/${pid}`, updatedProduct);

      if (!res.data.success) {
        return { success: false, message: res.data.message };
      }

      set((state) => ({
        products: state.products.map((product) =>
          product._id === pid ? res.data.data : product
        ),
      }));

      return { success: true, message: res.data.message };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Error updating product",
      };
    }
  },
}));