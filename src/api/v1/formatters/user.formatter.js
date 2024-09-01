export default class UserFormatter {
    // static id = user => user.id;
    // static email = user => user.email;
    // static username = user => user.username;

    static user = (user) => ({
        id: user.id,
        email: user.email,
        username: user.username,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    })

    static authPayload = (user) => ({
        id: user.id
    })

    static authHeader = (authHeader) => ({
        mode: authHeader.split(" ")[0],
        accessToken: authHeader.split(" ")[1],
    })
    
}