export default class Formatter {


    static authPayload = (user) => ({
        id: user.id
    })

    static user = (user) => ({
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    })

    static authorizationHeader = (authorizationHeader) => ({
        mode: authorizationHeader.split(" ")[0],
        token: authorizationHeader.split(" ")[1],
    })

}