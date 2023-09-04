const express=require('express');
const protect = require('../middleware/authMiddleware');
const router=express.Router();
const {accessChat,fetchChat,createGroupChat,renameGroupChat,addToGroup,removeFromGroup}=require('../controller/chatController.js');
router.post('/',protect,accessChat);
router.get('/',protect,fetchChat);
router.post('/group',protect,createGroupChat);
router.put('/rename',protect,renameGroupChat);
router.put('/groupremove',protect,removeFromGroup);
 router.put('/groupadd',protect,addToGroup);


module.exports = router;