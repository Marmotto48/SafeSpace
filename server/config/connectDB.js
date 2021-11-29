const mongoose = require ('mongoose');
const connectDB = async ()=>{
    try {
        const res = await mongoose.connect(
            process.env.URI,
            {useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connected")
    } catch (error) {
        console.error("Connection to databse failed",error)
        
    }
}
module.exports = connectDB;