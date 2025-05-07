import express from "express";
import { config } from "../config/config.js";
import { statusRouter } from "./routes/status.router.js";

const app = express();

app.use("/api",statusRouter);

app.listen(config.PORT, () => {
	const message = `👓 SERVER is UP at http://${config.HOST}:${config.PORT}`;
	console.log(message);
});
