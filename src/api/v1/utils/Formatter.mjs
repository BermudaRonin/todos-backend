export default class Formatter {


    static authPayload = (user) => ({
        id: user.id
    })

    static user = (user) => ({
        id: user.id,
        email: user.email,
        username: user.username,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    })

    static authHeader = (authHeader) => ({
        mode: authHeader.split(" ")[0],
        accessToken: authHeader.split(" ")[1],
    })

}