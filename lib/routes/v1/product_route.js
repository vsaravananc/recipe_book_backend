import express from "express";
import V1 from '../middleware.js'
import CategorieTable from '../../db/categorie_table.js';
import failerHelper from "../../helper/failer_helper.js";

const ProductRouter = express.Router();


ProductRouter.get('/categories',V1, async (req,res) => {
    const categorieData = await CategorieTable.getCategories();
    if(!categorieData) {
        failerHelper(res,"Something went wrong kindly come later", 401);
        return;
    }
    res.status(200).json({
        "success":true,
        "categories":categorieData.data
    });
});


export default ProductRouter;