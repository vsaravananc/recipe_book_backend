import express from "express";
import V1 from '../middleware.js'

const ProductRouter = express.Router();


ProductRouter.get('/get',V1,(req,res) => {
     res.json({
        "success":true
    });
});


export default ProductRouter;