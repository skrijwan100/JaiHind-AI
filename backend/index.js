require('dotenv').config();
const express = require("express")
const cookieParser = require('cookie-parser');
const app = express()
const cors = require("cors")
const server = require("./db")
server()

app.use(cookieParser())
app.use(express.json())
const coresoption = {
    origin: `${process.env.FRONTEND_URL}`,
    methods: ['GET', 'POST', 'DELETE'], // Ensure methods are in an array
    allowedHeaders: ['Content-Type', 'Authorization', 'auth-token'],
    credentials: true, // Allow cookies/auth headers
    optionsSuccessStatus: 200 // Fixes some browser CORS issues
}
app.use(cors(coresoption));
app.use(express.urlencoded({ extended: true })); 
app.use("/upload", express.static("upload"));

app.get("/",(req,res)=>{
    res.status(200).json({"message":"code run done"})
})
app.use("/v1/api/userauth",require("./routes/userauth"));

app.listen(process.env.PORT,()=>{
    console.log(`the app is run in ${process.env.PORT} port `);
})