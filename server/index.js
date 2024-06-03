import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

dotenv.config({ path: "./.env" });

const app = express();
app.use("/posts", postRoutes);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

const CONNECTION_URL = process.env.CONNECTION_URL;
// console.log(CONNECTION_URL);
const PORT = process.env.PORT || 3000;
// console.log(PORT);

mongoose
	.connect(CONNECTION_URL)
	.then(() =>
		app.listen(PORT, () => console.log("Server is running on port:" + PORT))
	)
	.catch((error) => console.log(error.message));
