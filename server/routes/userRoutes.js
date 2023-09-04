const express=require('express');
const router=express.Router();
const UserModel=require('../Model/UserModel.js');
const {authUser,registerUser,allUser}=require('../controller/userController.js');
const authMiddleware=require('../middleware/authMiddleware.js');
router.post('/',registerUser);
router.post('/login',authUser); 
router.get('/',authMiddleware,allUser);
module.exports=router;