import express from "express";
import bodyParser from "body-parser";
import mongoose, { mongo } from "mongoose";
import cors from "cors";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
const CONNECTION_URL =
"mongodb+srv://Reelrover:Reel@54321@cluster0.r0ii96a.mongodb.net/"

console.log(CONNECTION_URL);
const PORT = process.env.PORT || 3000;
console.log(PORT)
mongoose
	.connect(CONNECTION_URL)
	.then(() =>
		app.listen(PORT, () => console.log("Server is running on port:" + PORT))
	)
	.catch((error) => console.log(error.message));
