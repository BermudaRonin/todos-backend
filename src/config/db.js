import mongoose from "mongoose"


const connectDB = async ({ 
    username = "", 
    password = "", 
    clusterURL = "", 
    dbName = "dev",
    clusterName= "Cluster0"
 }) => {

    const connectionStr = `mongodb+srv://${username}:${password}@${clusterURL}/?retryWrites=true&w=majority&appName=${clusterName}`
    await mongoose.connect(connectionStr, {
        dbName: dbName
    }).then(
        ({ connection }) => {
            console.info(`▶️▶️▶️ MongoDB Database connected - ` + connection.db.databaseName)
        },
        error => {
            console.error(`▶️▶️▶️ MongoDB Database connection error - ` + error.stack)
        }
    )
}

export default connectDB