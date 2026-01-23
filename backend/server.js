import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
	const frontendPath = path.resolve(__dirname, "../frontend/dist");

	app.use(express.static(frontendPath));

	app.get("/*", (req, res) => {
		res.sendFile(path.join(frontendPath, "index.html"));
	});
}


const startServer = async () => {
	try {
		await connectDB();

		app.listen(PORT, () => {
			console.log(`Server started at http://localhost:${PORT}`);
		});
	} catch (error) {
		console.error("Failed to start server:", error.message);
		process.exit(1);
	}
};

startServer();