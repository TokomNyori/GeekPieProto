import mongoose from "mongoose"
export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI!, { dbName: "geekpieProto" })
        console.log('Database Connected Succesfully!')
        console.log(connection)
    } catch (error) {
        console.error('Failed to connect to Database!')
        console.error(error)
        process.exit(1)
    }
}