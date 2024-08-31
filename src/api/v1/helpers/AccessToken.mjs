import jwt from 'jsonwebtoken'
import Formatter from '../utils/Formatter.mjs';
import Validator from '../utils/validator.mjs';

export default class AccessToken {

    static generate = async (user) => {
        const authPayload = Formatter.authPayload(user);
        await Validator.authPayload(authPayload);

        const privateKey = process.env.JWT_PK;
        await Validator.privateKey(privateKey);

        // const options = { algorithm: 'RS256' }
        const options = {}
        const accessToken = jwt.sign(authPayload, privateKey, options);
        return accessToken;
    }

    static getAuthPayload = async (accessToken) => {
        await Validator.accessToken(accessToken);

        const privateKey = process.env.JWT_PK;
        await Validator.privateKey(privateKey);
        const options = {}

        const authPayload = jwt.verify(accessToken, privateKey, options);
        return authPayload
    }

    static extract = async (headers) => {
        const authorizationHeader = headers["authorization"];
        await Validator.authorizationHeader(authorizationHeader);
        const { mode, token } = Formatter.authorizationHeader(authorizationHeader);

        await Validator.accessToken(token);

        return token
    }
}
