import { resolve } from "path";
import express from "express";
import * as dotenv from "dotenv";
import UserRouter from "./routers/user.router";
import StatusRouter from "./routers/status.router";
import LikeStatusRouter from "./routers/likeStatus.router";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors"; 

const envPath = resolve(__dirname, "../.env");

dotenv.config({ path: envPath });

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json()); // Untuk permintaan JSON
app.use(express.urlencoded({ extended: true })); // Untuk permintaan formulir URL-encoded

app.use("/user", UserRouter);
app.use("/status", StatusRouter);
app.use("/like-status", LikeStatusRouter);


app.listen(process.env.PORT, () => {
	console.log(`server is running on port http://localhost:${process.env.PORT}`);
});
