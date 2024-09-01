import { Schema, model } from "mongoose"

const userSchema = new Schema({
    username: {
        type: Schema.Types.String,
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    hashedPassword: {
        type: Schema.Types.String,
        required: true
    }
}, {
    timestamps: true
})

const UserModel = model("User", userSchema)

export default UserModel;
