const jwt=require('jsonwebtoken');
const User=require('../Model/UserModel.js');

const protect=async(req,res,next)=>{
    let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
     return res.status(401).json({message:"Not Authroasied token failed"});
    }
  }

  if (!token) {
    return res.status(401).json({message:"Not Authroasied token failed"});

  }
}
module.exports=protect;