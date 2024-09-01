import bcrypt from "bcrypt";

import Err from "../utils/Err.mjs";

import { ValidateEnvironementVariable, ValidateUser } from "../utils/Validator.mjs";

const saltRounds = parseInt(process.env.SALT_ROUNDS);

export default class UserPassword {

    static hash = async (plainPassword) => {

        await ValidateUser.plainPassword(plainPassword);
        await ValidateEnvironementVariable.saltRounds(saltRounds);

        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

        await ValidateUser.hashedPassword(hashedPassword);

        return hashedPassword
    }

    static verify = async (plainPassword, hashedPassword) => {
        await ValidateUser.plainPassword(plainPassword);
        await ValidateUser.hashedPassword(hashedPassword);

        const isValid = await bcrypt.compare(plainPassword, hashedPassword);
        if (!isValid) return Err.throw("Invalid password!") 

        return isValid
    }

} 