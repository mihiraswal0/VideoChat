const notFound=(req,res)=>{
return res.status(401).json({message:"Error Not Found"});
}
const error=(err,req,res)=>{
    console.log(err);
 return  res.status(400).json({
        message:err.message,
    })

}

module.exports={notFound,error};