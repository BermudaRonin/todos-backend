import { model, Schema } from "mongoose";

const todoSchema = Schema({
    title: {
        type: Schema.Types.String
    },
    description: {
        type: Schema.Types.String
    },
    manualCompleted: {
        type: Schema.Types.Boolean
    },
    creationDate: {
        type: Schema.Types.Date
    },
    dueDate: {
        type: Schema.Types.Date
    },
    list: {
        type: Schema.Types.ObjectId,
        ref: "Todolist"
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
})

const Todo = model("Todo", todoSchema);

export default Todo;