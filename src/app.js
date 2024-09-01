import e from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import api from "./api/index.js";

const server = e();

await connectDB({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    clusterURL: process.env.DB_CLUSTER_URL,
    clusterName: process.env.DB_CLUSTER_NAME,
    dbName: process.env.DB_NAME,
})

server.use(morgan("dev"));
server.use(e.json());

server.use("/api", api)

const PORT = process.env.PORT || 3000;

server.listen(PORT, (err) => {
    if (err) return console.error("▶️▶️▶️ Server KO ", err)
    return console.info(`▶️▶️▶️ Server running on ${PORT} -- ${process.env.ENV} Environment`)
})