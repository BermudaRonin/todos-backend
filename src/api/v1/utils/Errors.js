export class CustomError extends Error {
    constructor(message, statusCode = 500, data = null) {
        super(message);
        this.statusCode = statusCode;
        this.data = data;
    }
}

export function Throw(message, statusCode, data) {
    throw new CustomError(message, statusCode, data);
}


// class Errors {

// }

// const isValidStatusCode = value => typeof value === 'number' && value >= 100 && value < 600;
// const isMessage = value => typeof value == 'string';
// const isDataObject = value => value !== null && typeof value == 'object' && !Array.isArray(value)


export function Catch(error) {
    let message = error.message || "Server error";
    let statusCode = 500;
    let data = null;

    const results = { message, statusCode, data };


    // Catch errors thrown by mongoose

    if (error.name == "MongoServerError") {

        // Email duplicate error

        if (error.code == 11000) return {
            statusCode: 409,
            message: `Email address already exists: ${error.keyValue.email}`,
            data: { field: "email" }
        }

        console.log("//// Undetected Mongoose error");
        return results;
    }


    // Catch custom errors;
    
    if (error instanceof CustomError) {
        console.log("//// My custom error");
        return {
            statusCode: error.statusCode,
            message: error.message,
            data: error.data
        }
    }


    console.log("//// Native error");
    console.info(error);

    return results;
}



