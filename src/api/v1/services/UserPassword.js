import bcrypt from "bcrypt";

import { Throw } from "../utils/Errors.js";

import EnvValidator from "../validators/env.validator.js";
import UserValidator from "../validators/user.validator.js";


const saltRounds = parseInt(process.env.SALT_ROUNDS);

export default class UserPassword {

    // Plain password is already checked in User.createUser
    static hash = async (plainPassword) => {

        await EnvValidator.saltRounds(saltRounds);

        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
        await UserValidator.hashedPassword(hashedPassword);

        return hashedPassword
    }

    static verify = async (plainPassword, hashedPassword) => {
        await UserValidator.passwords(plainPassword, hashedPassword);

        const isValid = await bcrypt.compare(plainPassword, hashedPassword);
        if (!isValid) return Throw("Invalid password!", 400, { field: "password" });
    }

} 