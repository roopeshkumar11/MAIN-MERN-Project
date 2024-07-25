import mongoose from "mongoose"
export const Dbconnection= async ()=>{
    const DB_URL="mongodb://localhost:27017/file-sharing"
    try{
  await mongoose.connect(DB_URL)
  console.log("Database connected successfully")
    }
    catch(error){
        console.log("Error while connecting ",error.message)
    }
}