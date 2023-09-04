const UserModel=require('../Model/UserModel.js');
const generateToken=require('../db/generateToken.js');
const bcrypt=require('bcrypt');
const registerUser=async(req,res,next)=>{
    const {name,email,password,pic}=req.body;
    if(!name ||!email ||!password)
    {
         res.status(400);
        throw new Error("All fields are not filled");
    }
    const userEXist=await UserModel.findOne({email});
    if(userEXist)
    {
        res.status(400);
        throw new Error("User already exists");
    }
    const salt=await bcrypt.genSalt(5);
    const hashedPassword=await bcrypt.hash(password,salt);
    // console.log(hashedPassword);
    const user=await UserModel.create({
       username: name,
        email,
        password:hashedPassword,
        pic,
    })
    if(user)
    {
      return  res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.picture,
            token:generateToken(user._id)
        });
    }
    else{
        res.status(400);
        throw new Error("Failed to built");
    }

}
const authUser=async(req,res)=>{
const {email,password}=req.body;
const user=await UserModel.findOne({email});

if(user){

const compare=await bcrypt.compare(password,user.password);
if(compare)
{
    return res.status(200).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        pic:user.picture,
        token:generateToken(user._id)
    });
}
else
{
    res.status(400);
    throw new Error("Password does not match");
}
}
else
{
    res.status(400);
    throw new Error("User does not exist");
}


};
module.exports={registerUser,authUser};