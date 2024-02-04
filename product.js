const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling Get requests"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling post requests'
    });
});
router.get('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'you discoved the special Id',
            id:id
        });
    } else{
        res.status(200).json({
            message:'you passed an ID'
        });
    }
});

module.exports = router;
