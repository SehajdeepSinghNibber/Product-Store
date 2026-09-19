import fastify from "fastify";
import helmet from "@fastify/helmet";
import cors from "@fastify/cors";
import { productRoutes } from "../src/route/product.route.js";

const app = fastify({
    logger: true
})

await app.register(helmet);

await app.register(cors,{
    origin: true
})

app.register(productRoutes,{
    prefix:"/api"
})

export default app;