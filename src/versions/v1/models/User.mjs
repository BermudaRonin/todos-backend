import { model, Schema } from "mongoose";

const userSchema = Schema({
    email: {
        type: Schema.Types.String
    },
    hashedPassword: {
        type: Schema.Types.String 
    }
})

const User = model("User", userSchema);

export default User;