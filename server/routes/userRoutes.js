const express=require('express');
const router=express.Router();
const UserModel=require('../Model/UserModel.js');
const {authUser,registerUser}=require('../controller/userController.js');
router.post('/',registerUser);
router.post('/login',authUser); 
module.exports=router;