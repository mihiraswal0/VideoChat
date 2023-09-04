const jwt=require('jsonwebtoken');
require('dotenv').config();
const generateToken=(id)=>{
    // console.log(id)
    return jwt.sign({id},process.env.JWT_SECRET_KEY);
}
module.exports = generateToken;