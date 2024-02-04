const express=require('express');
const router=express.Router();
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'orders were fetched'
    });
});
router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:'orders was created'
    });
});
module.exports=router; 