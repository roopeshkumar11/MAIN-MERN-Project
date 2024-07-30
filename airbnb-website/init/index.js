const mongoose=require("mongoose")

const Listing=require("../models/listening.js")
const initdata=require("./data.js")
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust"
main()
.then(()=>{
    console.log("connect to DB")
})
.catch((err)=>{
    console.log(err)
})

async function main(){
await mongoose.connect(MONGO_URL)
}

const initDB=async ()=>{
    await Listing.deleteMany({})
    await Listing.insertMany(initdata.data)
    console.log("data was initalise")
}
initDB()