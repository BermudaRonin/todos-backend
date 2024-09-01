import UserPassword from "./UserPassword.mjs";

import { UserModel } from "../models/user.model.mjs";

import UserValidator from '../validators/user.validator.mjs';
import UserFormatter from "../formatters/user.formatter.mjs";

import { Throw } from "../utils/Errors.mjs";


export default class User {


    static createUser = async credentials => {

        await UserValidator.registration(credentials);

        const hashedPassword = await UserPassword.hash(credentials.password);

        const user = await UserModel.create({
            username: credentials.username,
            email: credentials.email,
            hashedPassword,
        });

        if (!user) Throw("User not created");

        return UserFormatter.user(user);
    }

    static getUserByCredentials = async (credentials) => {
        await UserValidator.login(credentials);

        let user = null;
        let field = "";

        if ("username" in credentials) {
            field = "username"
            user = await UserModel.findOne({ username: credentials.username });
        }

        if ("email" in credentials) {
            field = "email"
            user = await UserModel.findOne({ email: credentials.email });
        }

        if (!user) Throw("User not found", 404, { field })

        await UserPassword.verify(credentials.password, user.hashedPassword);

        return UserFormatter.user(user);
    }

    static getUserByAuthPayload = async (authPayload) => {

        await UserValidator.authPayload(authPayload);

        const user = await UserModel.findById(authPayload.id);
        if (!user) Throw("User not found", 404, { field: "access-token" })

        return UserFormatter.user(user);
    }
}



