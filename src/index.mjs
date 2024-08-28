import { configDotenv } from "dotenv"
import e from "express";
import morgan from "morgan";
import connectDB from "./config/db.mjs";

configDotenv();


const server = e();

server.use(morgan("dev"));
server.use(e.json());

await connectDB({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    clusterURL: process.env.DB_CLUSTER_URL,
    clusterName: process.env.DB_CLUSTER_NAME,
    dbName: process.env.DB_NAME_DEV,
})

const PORT = process.env.PORT;

server.listen(PORT, (err) => {
    if (err) return console.error("▶️▶️▶️ Server KO ", err)
    return console.info("▶️▶️▶️ Server OK - ", PORT)
})