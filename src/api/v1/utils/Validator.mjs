import Err from "./Err.mjs";

export default class Validator {
    static uid = async (id) => {
        if (!id) {
            throw new Error("ID is missing")
        }
    }


}
export class ValidateUser {
    // Single
    static id = Validator.uid;
    static email = async (value = "") => {
        const conditions = [value, typeof value == "string", value.includes("@"), value.length > 6]
        if (conditions.includes(false)) return Err.throw("Invalid user email");
    };
    static username = async (value = "") => {
        const conditions = [value, typeof value == "string", value.length > 6]
        if (conditions.includes(false)) return Err.throw("Invalid username");
    };
    static plainPassword = async (value = "") => {
        const conditions = [value, typeof value == "string", value.length > 6]
        if (conditions.includes(false)) return Err.throw("Invalid password");
    };
    static hashedPassword = async (value = "") => {
        const conditions = [value, typeof value == "string", value.length > 6]
        if (conditions.includes(false)) return Err.throw("Invalid hashed password");
    };
    static accessToken = async (value = "") => {
        const conditions = [value, typeof value == "string"]
        if (conditions.includes(false)) return Err.throw("Invalid Access Token");
    };

    // Other
    static authHeader = async (value = "") => {
        const conditions = [value, value.includes("Bearer")];
        if (conditions.includes(false)) return Err.throw("Invalid auth header");
    }

    // Composed
    static registrationCredentials = async (value = {}) => {
        await this.username(value.username);
        await this.email(value.email);
        await this.plainPassword(value.password);
    };
    static loginCredentials = async (value = {}) => {
        await this.email(value.email);
        await this.plainPassword(value.password);
    };
    static authPayload = async (value = "") => {
        await this.id(value.id);
    }

}

export class ValidateEnvironementVariable {
    static saltRounds = async (value = 0) => {
        const conditions = [value, typeof value == "number", value > 0];
        if (conditions.includes(false)) return Err.throw("Invalid SaltRounds (env)");
    }
    static privateKey = async (value = "") => {
        const conditions = [value, typeof value == "string"];
        if (conditions.includes(false)) return Err.throw("Invalid privateKey (env)");
    }
}


