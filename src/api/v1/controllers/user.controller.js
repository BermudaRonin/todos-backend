import User from "../services/User.js";
import AccessToken from "../services/AccessToken.js";

import Controller from "../utils/Controller.js";
import { Throw } from "../utils/Errors.js";

export class UserMiddleware {
    static getCurerntUser = async (req, res, next) => {
        const { request, sendError } = new Controller(req, res);

        try {
            const headers = request.headers;
            const authHeader = headers["authorization"];

            const accessToken = await AccessToken.extract(authHeader);
            const authPayload = await AccessToken.getAuthPayload(accessToken);

            req.authPayload = authPayload;
            next();

        } catch (error) {
            sendError(error);
        }
    }
}

export class UserController {

    static register = async (req, res) => {
        const { request, sendJSON, sendError } = new Controller(req, res);
        try {
            const user = await User.createUser(request.body);
            const accessToken = await AccessToken.generate(user);
            sendJSON(201, "User created and authenticated!", { accessToken, user })
        } catch (error) {
            sendError(error);
        }
    }

    static login = async (req, res) => {
        const { request, sendJSON, sendError } = new Controller(req, res);
        try {
            const user = await User.getUserByCredentials(request.body);
            const accessToken = await AccessToken.generate(user);
            sendJSON(200, "User validated and authenticated!", { accessToken, user })
        } catch (error) {
            sendError(error);
        }
    }

    static getCurrentUser = async (req, res) => {
        const { request, sendJSON, sendError } = new Controller(req, res);
        try {
            const authPayload = request.authPayload;
            if (!authPayload) Throw("No auth payload, check middleware", 400);
            
            const user = await User.getUserByAuthPayload(authPayload);
            sendJSON(200, "User fetched!", { user })
        } catch (error) {
            sendError(error);
        }
    }

}