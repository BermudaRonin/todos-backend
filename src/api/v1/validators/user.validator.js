import { validate, Validation } from "../utils/Validator.js";

export default class UserValidator {

    static id = async (value = "") => validate([
        new Validation(!value, "User ID is missing", 400),
        new Validation(typeof value !== "string", "User ID must be a string", 400),
    ], {
        field: "id"
    })

    static email = async (value = "") => validate([
        new Validation(!value, "Email is missing", 400),
        new Validation(typeof value !== "string", "Email must be a string", 400),
        new Validation(!value.includes("@"), "Email must contain '@'", 400),
        new Validation(value.length < 6, "Email must be 6 chars min", 400),
    ], {
        field: "email"
    })

    static username = async (value = "") => validate([
        new Validation(!value, "Username is missing", 400),
        new Validation(typeof value !== "string", "Username must be a string", 400),
        new Validation(value.length < 6, "Username must be 6 chars min", 400),
    ], {
        field: "username"
    })

    static plainPassword = async (value = "") => validate([
        new Validation(!value, "Password is missing", 400),
        new Validation(typeof value !== "string", "Password must be a string", 400),
        new Validation(value.length < 6, "Password must be 6 chars min", 400),
    ], {
        field: "password"
    })

    static hashedPassword = async (value = "") => validate([
        new Validation(!value, "Hashed Password is missing", 400),
        new Validation(typeof value !== "string", "Hashed Password must be a string", 400),
    ])

    static passwords = async (plainPassword, hashedPassword) => {
        await this.plainPassword(plainPassword);
        await this.hashedPassword(hashedPassword);
    }

    static registration = async (credentials) => {
        await this.email(credentials.email)
        await this.username(credentials.username)
        await this.plainPassword(credentials.password)
    }

    static login = async (credentials = {}) => {
        const withEmail = "email" in credentials;
        const withUsername = "username" in credentials;
        
        await validate([
            new Validation(!withEmail && !withUsername, "Credentials must have email or username", 400),
        ])

        await this.plainPassword(credentials.password);

        if (withEmail) {
            await this.email(credentials.email)
        }

        if (withUsername) {
            await this.username(credentials.username)
        }
    }

    static accessToken = async (value = "") => validate([
        new Validation(!value, "Access token is missing", 400),
        new Validation(typeof value !== "string", "Access token must be a string", 400),
    ])

    static authPayload = async (value = "") => {
        await this.id(value.id);
    }

    static authHeader = async (value = "") => validate([
        new Validation(!value, "Authorization header is missing", 400),
        new Validation(!value.includes("Bearer"), "Bearer keyword is missing", 400),
    ])
}