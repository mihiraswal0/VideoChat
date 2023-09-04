const UserModel=require('../Model/UserModel.js');
const generateToken=require('../db/generateToken.js');
const bcrypt=require('bcrypt');
const registerUser=async(req,res,next)=>{
    const {name,email,password,pic}=req.body;
    if(!name ||!email ||!password)
    {
        
     return res.status(400).json({message:"Enter All credentials required"});
    }
    const userEXist=await UserModel.findOne({email});
    if(userEXist)
    {
        // res.status(400);
       return res.status(400).json({message:"USer already exists"});
        // next( new Error("User already exists"));
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
     
        // next( new Error("Failed to built"));
       return res.status(400).json({message: "Failed to build"});
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
   return res.status(404).json({message: 'Invalid password'});    
}
}
else
{
  return  res.status(404).json({message: ' User does not exist'});
}

};
const allUser=async(req,res)=>{
    console.log(req.body);
    try{
    const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
    const users = await UserModel.find(keyword).find({ _id: { $ne: req.user._id } });
    res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
module.exports={registerUser,authUser,allUser};