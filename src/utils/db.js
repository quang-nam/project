import mongoose from "mongoose";
const connect = async()=>{
    try{
     await mongoose.connect(process.env.MONGO)
    }catch(err){
        console.error(err)
        throw new Error("Couldn't connect to Mongo")
    }
}
export default connect;