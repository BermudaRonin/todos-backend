import jwt from 'jsonwebtoken'

import UserValidator from '../validators/user.validator.mjs';
import EnvValidator from '../validators/env.validator.mjs';
import UserFormatter from '../formatters/user.formatter.mjs';

const privateKey = process.env.JWT_PK;

export default class AccessToken {

    static generate = async (user) => {

        const authPayload = UserFormatter.authPayload(user);
        await UserValidator.authPayload(authPayload);
        
        await EnvValidator.privateKey(privateKey);

        const accessToken = jwt.sign(authPayload, privateKey);
        await UserValidator.accessToken(accessToken);

        return accessToken;
    }

    static getAuthPayload = async (accessToken) => {
        await UserValidator.accessToken(accessToken);

        await EnvValidator.privateKey(privateKey);
        
        const authPayload = jwt.verify(accessToken, privateKey);
        await UserValidator.authPayload(authPayload);

        return authPayload
    }

    static extract = async (authHeader) => {
        await UserValidator.authHeader(authHeader);

        const { accessToken } = UserFormatter.authHeader(authHeader);
        await UserValidator.accessToken(accessToken);

        return accessToken
    }
}
