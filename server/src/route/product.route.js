import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

fastify.get("/",getProducts );
fastify.post("/", createProduct);
fastify.put("/:id", updateProduct);
fastify.delete("/:id",deleteProduct );
