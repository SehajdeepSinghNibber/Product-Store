import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    image:{
        type:String,
        required: true
    }
},{
    timestamps: true //createdat, updatedat
})

const product = mongoose.model('Product',productSchema);
//Product is stored in form of products in mongoose

export default product;