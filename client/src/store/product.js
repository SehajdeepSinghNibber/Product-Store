import { create } from "zustand";

export const useProductStore = create((set) => ({
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

    fetchProducts: async ()=>{
        const res = await fetch("/api");
        const data = await res.json();
        set({ products: data.product })
    }
}));