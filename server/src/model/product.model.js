import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String
        },

        price: {
            required: true,
            type: Number
        },

        image: {
            required: true,
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", productSchema);

export default Product;