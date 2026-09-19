import fastify from "fastify";
import helmet from "@fastify/helmet";
import cors from "@fastify/cors";

const app = fastify({
    logger: true
})

await app.register(helmet);

await app.register(cors,{
    origin: true
})

export default app;