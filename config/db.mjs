import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://192.168.1.53:27017/proshop', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`MongoDB connected: ${conn.connection.host}`)
    }
    catch (e) {
        console.log(`Error env: ${process.env.MONGO_URI}`)
        console.log(`Error : ${e.message}`)
        process.exit(1)
    }
}

export default connectDB
