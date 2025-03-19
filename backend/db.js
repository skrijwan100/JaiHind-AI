const mongoose= require('mongoose')
const connectserver =async()=>{
    try {
        await mongoose.connect(process.env.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("The server is run.")
        
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}
module.exports= connectserver