export default class Validator {


    // Configuration

    static saltRounds = async (saltRounds) => {
        const isValid = typeof saltRounds == 'number' && saltRounds && saltRounds > 0
        if (!isValid) {
            throw new Error("Invalid saltRounds config")
        }
    }
    static privateKey = async (privateKey) => {
        if (!privateKey) {
            throw new Error("Invalid privateKey config")
        }
    }

    // Globals

    static uid = async (id) => {
        if (!id) {
            throw new Error("ID is missing")
        }
    }

    // User

    static userEmail = async (userEmail) => {
        if (!userEmail) {
            throw new Error("User email is missing")
        }
    }

    static userPlainPassword = async (plainPassword) => {
        if (!plainPassword) {
            throw new Error("Password is missing")
        }
    }
    static userHashedPassword = async (hashedPassword) => {
        if (!hashedPassword) {
            throw new Error("Hashed password is missing")
        }
    }

    static accessToken = async (accessToken) => {
        if (!accessToken) {
            throw new Error("Access Token is missing")
        }
    }

    static credentials = async (credentials) => {
        await this.userEmail(credentials?.email);
        await this.userPlainPassword(credentials?.password);
    }

    static authPayload = async (authPayload) => {
        await this.uid(authPayload?.id);
    }

    static authorizationHeader = async (authorizationHeader) => {
        if (!authorizationHeader) {
            throw new Error("Authorization Header is missing")
        }
    }

    // 


}
