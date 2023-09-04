const mongoose=require('mongoose');
const UserModel=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    pic:{
        type:String,
        required:true,
        default:"https://tse3.mm.bing.net/th?id=OIP.ruat7whad9-kcI8_1KH_tQHaGI&pid=Api&P=0&h=180" 
    }

},{timestamps:true});
module.exports=mongoose.model('User',UserModel);