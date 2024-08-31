import User from "../services/User.mjs";

import AccessToken from "../helpers/AccessToken.mjs";
import Err from "../utils/Err.mjs";


export class UserMiddleware {
    static getCurerntUser = async (request = new Request, response = new Response, next) => {
        try {
            const headers = request.headers;
            const accessToken = await AccessToken.extract(headers);
            const authPayload = await AccessToken.getAuthPayload(accessToken);

            request.authPayload = authPayload;
            next();

        } catch (error) {
            return response.status(500).json({
                success: false,
                message: "Server catch err : " + error.message,
                data: null
            })
        }
    }
}

export class UserController {

    static register = async (request = new Request, response = new Response) => {
        try {
            const userCredentials = request.body;
            const user = await User.createUser(userCredentials);
            const accessToken = await AccessToken.generate(user);

            return response.status(201).json({
                success: true,
                message: "User created and authenticated!",
                data: {
                    user,
                    accessToken
                }
            })
        } catch (error) {
            return response.status(500).json({
                success: false,
                message: "Server catch err : " + error.message,
                data: null
            })
        }
    }

    static login = async (request = new Request, response = new Response) => {
        try {
            const userCredentials = request.body;
            const user = await User.getUserByCredentials(userCredentials);
            const accessToken = await AccessToken.generate(user);

            return response.status(201).json({
                success: true,
                message: "User validated and authenticated!",
                data: {
                    user,
                    accessToken
                }
            })
        } catch (error) {
            return response.status(500).json({
                success: false,
                message: "Server catch err : " + error.message,
                data: null
            })
        }
    }

    static getCurrentUser = async (request = new Request, response = new Response) => {
        try {
            const authPayload = request.authPayload;
            if (!authPayload) Err.throw(" No auth payload");

            const user = await User.getUserByAuthPayload(authPayload);

            return response.status(201).json({
                success: true,
                message: "User fetched!",
                data: {
                    user,
                }
            })
        } catch (error) {
            return response.status(500).json({
                success: false,
                message: "Server catch err : " + error.message,
                data: null
            })
        }
    }

}