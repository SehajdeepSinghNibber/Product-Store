import express from "express";
import { connectDB } from "./config/db.js";
import routes from "./routes/route.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/products", routes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at http://localhost:${PORT}/api/products`);
});
