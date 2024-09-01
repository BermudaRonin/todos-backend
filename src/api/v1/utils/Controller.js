import { Catch } from "./Errors.js";

const isValidStatusCode = value => typeof value === 'number' && value >= 100 && value < 600;
const isMessage = value => typeof value == 'string';
const isDataObject = value => value !== null && typeof value == 'object' && !Array.isArray(value)

export default class Controller {

    constructor(req, res) {
        this.request = req;
        this.response = res;
    }

    sendJSON = (...args) => {
        const status = args.find(isValidStatusCode) || 200;
        const message = args.find(isMessage) || "Success!";
        const data = args.find(isDataObject) || {};
        return this.response.status(status).json({ success: true, message, data })
    }

    sendError = (error) => {
        const { message, statusCode, data } = Catch(error);
        return this.response.status(statusCode).json({ success: false, message, data })
    }
}