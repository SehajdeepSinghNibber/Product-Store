import { createProduct, deleteProduct, getProducts, updateProduct } from "../controller/product.controller.js";

export const productRoutes = (fastify)=>{
    fastify.get("/",getProducts );
    fastify.post("/", createProduct);
    fastify.put("/:id", updateProduct);
    fastify.delete("/:id",deleteProduct );
}
