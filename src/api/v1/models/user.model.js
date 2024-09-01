import { model, Schema } from "mongoose"

const dbSchema = new Schema({
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


export const UserModel = model("User", dbSchema)

