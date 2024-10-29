import mongoose from 'mongoose'

let cached = global.mongoose

if(!cached){
    cached = global.mongoose = ({conn:null, promise:null})
}

const connectDB = async()=>{
    try{
        if(cached.conn){
            return cached.conn
        }

        if(!cached.promise){
            const opts = {
                bufferCommands : false
            }

            cached.promise = mongoose.connect(process.env.MONGO_URI as string, opts).then((mongoose)=>{
                return mongoose.connection
            })
        }

        cached.conn = await cached.promise

        return cached.conn

    }catch(error){
        console.log(error)
    }
}

export default connectDB