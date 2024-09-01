import { Router } from "express";

import version_1 from "./v1/router.js"

const api = Router();

api.use("/v1", version_1);

export default api;