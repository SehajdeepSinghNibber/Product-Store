import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const productStore = (set) => ({
    products: [],

    setProducts: (products) => set({ products }),

    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return {
                success: false,
                message: "Please fill in all fields.",
            };
        }

        const res = await fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });

        const data = await res.json();

        set((state) => ({
            products: [...state.products, data.product],
        }));

        return {
            success: true,
            message: "Product Created Successfully",
        };
    },

    fetchProducts: async () => {
        const res = await fetch("/api");
        const data = await res.json();

        set({ products: data.products });
    },

    deleteProduct: async (pid) => {
        const res = await fetch(`/api/${pid}`, {
            method: "DELETE",
        });

        const data = await res.json();

        if (!data.success) {
            return {
                success: false,
                message: data.message,
            };
        }

        set((state) => ({
            products: state.products.filter(
                (product) => product._id !== pid
            ),
        }));

        return {
            success: true,
            message: data.message,
        };
    },

    updateProduct: async (pid, updatedProduct) => {
        const res = await fetch(`/api/${pid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        });

        const data = await res.json();

        if (!data.success) {
            return {
                success: false,
                message: data.message,
            };
        }

        set((state) => ({
            products: state.products.map((product) =>
                product._id === pid ? data.data : product
            ),
        }));

        return {
            success: true,
            message: data.message,
        };
    },
});

const useProductStore = create(
    devtools(
        persist(productStore, {
            name: "Product_Store",
        })
    )
);

export default useProductStore;