

export default class Err {

    static throw = (message = "") => {
        throw new Error(message);
    }

}