import Product from "../model/product.model.js";

export const getProducts = async (request,reply)=>{

    try {

        const products = await Product.find({})

        reply.code(200).send({
            success: true,
            message:"Products fetched successfully",
            products

        })
    } catch (error) {
        reply.code(500).send({
            success: false,
            message: "Failed to fetch products",
            error: error.message, 
        });
    }

}

export const createProduct = async (request,reply)=>{
    try {
        const {name, price, image} = request.body;

        const product = await Product.create({
            name,
            price,
            image
        });

        reply.code(201).send({
            success: true,
            message: "Product created successfully",
            product,
        });

    } catch (error) {
        reply.code(500).send({
            success: false,
            message: "Failed to create product",
            error: error.message,
        });
    }
}

export const updateProduct = async (request,reply)=>{
    try {
        
        const {id} = request.params;
        const {name, price, image} = request.body;

        const product = await Product.findByIdAndUpdate(
            id,{
                name,
                price,
                image
            },
            {
            new: true,
            runValidators: true, 
            }
        )

        if (!product) {
            return reply.code(404).send({
                success: false,
                message: "Product not found",
            })
        }

        reply.code(200).send({
            success: true,
            message: "Product successfully updated",
            product,
        })

    } catch (error) {
        reply.code(500).send({
            success: false,
            message: "Failed to update product",
            error: error.message,
        });
    }
}

export const deleteProduct = async (request,reply)=>{
    try {

        const { id } = request.params;

        const product = await Product.findByIdAndDelete(id);

        if(!product){
            return reply.code(404).send({
                success: false,
                message: "Product not found",
            })
        }

        reply.code(200).send({
            success: true,
            message: "Product successfully deleted",
            product,
        })

        
    } catch (error) {
        reply.code(500).send({
            success: false,
            message: "Failed to delete product",
            error: error.message,
        });
    }
}