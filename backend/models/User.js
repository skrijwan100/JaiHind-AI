const mongoose=require("mongoose")
const {Schema}=mongoose;
const newuser= new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
      type:String,
      require:true,
    },
    profilePic:{
        type:String,
        default:'https://res.cloudinary.com/dcvejeszo/image/upload/v1741595130/user_profiles/ibsgbbfdxkk3d6qirsrg.jpg'
    },
    password:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model('User',newuser);