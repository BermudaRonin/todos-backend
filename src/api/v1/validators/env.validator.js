import { validate, Validation } from "../utils/Validator.js";

export default class EnvValidator {

    static saltRounds = async (value) => validate([
        new Validation(!value, "saltRounds is missing"),
        new Validation(typeof value !== "number", "saltRounds must be a number"),
        new Validation(!(value > 0), "saltRounds must > 0"),
    ])

    static privateKey = async (value) => validate([
        new Validation(!value, "privateKey is missing"),
        new Validation(typeof value !== "string", "privateKey must be a string")
    ])

}