import jwt from 'jsonwebtoken'
import Formatter from '../utils/Formatter.mjs';
import { ValidateEnvironementVariable, ValidateUser } from '../utils/Validator.mjs';

const privateKey = process.env.JWT_PK;

export default class AccessToken {

    static generate = async (user) => {

        const authPayload = Formatter.authPayload(user);

        await ValidateUser.authPayload(authPayload);
        await ValidateEnvironementVariable.privateKey(privateKey);

        const accessToken = jwt.sign(authPayload, privateKey);
        return accessToken;
    }

    static getAuthPayload = async (accessToken) => {
        await ValidateUser.accessToken(accessToken);
        await ValidateEnvironementVariable.privateKey(privateKey);

        const authPayload = jwt.verify(accessToken, privateKey);
        return authPayload
    }

    static extract = async (headers) => {
        const authHeader = headers["authorization"];

        await ValidateUser.authHeader(authHeader);

        const { accessToken } = Formatter.authHeader(authHeader);

        await ValidateUser.accessToken(accessToken);

        return accessToken
    }
}
