const express=require('express');
const app=express();
const morgan=require('morgan');
const productRoutes=require('./product');
const orderRoutes=require('./order');
app.use(morgan('dev'));
app.use('/product',productRoutes);
app.use('/order',orderRoutes);
app.use((req,res,next)=>{
    const error=new Error('Not found');
    error.status=404;
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
});
module.exports=app;