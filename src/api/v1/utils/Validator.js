import { Throw } from "./Errors.js";

export class Validation {
    constructor(condition, message, statusCode) {
        this.condition = condition;
        this.message = message || "Invalid entry";
        this.statusCode = statusCode || 500;
    }
}

export const validate = async (validations = [], data = null) => {
    for (const validation of validations) {
        const { condition, message, statusCode } = validation;
        if (condition == true) {
            return Throw(message, statusCode, data);
        }
    }
}