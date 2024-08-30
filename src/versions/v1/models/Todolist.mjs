import { model, Schema } from "mongoose";

const todolistSchema = Schema({
    title: {
        type: Schema.Types.String
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const Todolist = model("Todolist", todolistSchema);

export default Todolist;