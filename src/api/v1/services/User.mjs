import UserModel from "../models/user.model.mjs";

import UserPassword from "../helpers/UserPassword.mjs";

import Err from "../utils/Err.mjs";
import Formatter from "../utils/Formatter.mjs";
import { ValidateUser } from "../utils/Validator.mjs";

export default class User {

    static createUser = async (userCredentials) => {
        await ValidateUser.registrationCredentials(userCredentials);

        const hashedPassword = await UserPassword.hash(userCredentials.password);

        const user = await UserModel.create({
            username: userCredentials.username,
            email: userCredentials.email,
            hashedPassword,
        });

        if (!user) Err.throw("User not created");

        return Formatter.user(user);
    }

    static getUserByCredentials = async (userCredentials) => {
        await ValidateUser.loginCredentials(userCredentials);

        const user = await UserModel.findOne({ email: userCredentials.email });
        if (!user) Err.throw("User not found");

        await UserPassword.verify(userCredentials.password, user.hashedPassword);

        return Formatter.user(user);
    }

    static getUserByAuthPayload = async (authPayload) => {
        await ValidateUser.authPayload(authPayload);

        const user = await UserModel.findById(authPayload.id);
        if (!user) Err.throw("User not found");

        return Formatter.user(user);
    }
}



