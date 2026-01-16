import express from "express";
import V1 from '../middleware.js'
import ProductController from "../../controller/product_controller.js";

const ProductRouter = express.Router();

ProductRouter.get('/categories',V1, ProductController.getListCategories);
ProductRouter.get('/product/:c',V1,ProductController.getProductInfo);
ProductRouter.get('/product/detail/:idMeal',V1,ProductController.getProductDetail);


export default ProductRouter;