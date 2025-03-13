const mongoose= require('mongoose')
const connectserver =async()=>{
    try {
        await mongoose.connect(process.env.mongoURI)
        console.log("The server is run.")
        
    } catch (error) {
        console.log(error)
        
    }
}
module.exports= connectserver