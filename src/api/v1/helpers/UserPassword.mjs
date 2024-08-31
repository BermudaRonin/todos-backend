import bcrypt from "bcrypt"; 
import Validator from "../utils/validator.mjs";
import Err from "../utils/Err.mjs";

export default class UserPassword {

    static hash = async (plainPassword) => {
        await Validator.userPlainPassword(plainPassword);

        const saltRounds = parseInt(process.env.SALT_ROUNDS);
        await Validator.saltRounds(saltRounds);

        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
        if (!hashedPassword) {
            Err.throw("Password not hashed");
        }
        return hashedPassword
    }

    static verify = async (plainPassword, hashedPassword) => {
        await Validator.userPlainPassword(plainPassword);
        await Validator.userHashedPassword(hashedPassword);

        const isValid = await bcrypt.compare(plainPassword, hashedPassword);
        if (!isValid) {
            Err.throw("Invalid Password");
        }
        return isValid
    }

} 