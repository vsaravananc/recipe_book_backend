
import CategorieTable from '../db/categorie_table.js';
import failerHelper from "../helper/failer_helper.js";

class ProductController {
    static getListCategories = async (req, res) => {
        const categorieData = await CategorieTable.getCategories();
        if (!categorieData) {
            failerHelper(res, "Something went wrong kindly come later", 401);
            return;
        }
        res.status(200).json({
            "success": true,
            "categories": categorieData.data
        });
    }

    static getProductInfo = async (req, res) => {
        const categorie = req.params.c;
        const response = await CategorieTable.getSpecificItems(categorie);
        res.json({
            "success": true,
            "meals": response.data
        })
    }

    static getProductDetail = async (req, res) => {
        const idMeal = req.params.idMeal;
        const response = await CategorieTable.getProductDetail(idMeal);
        res.json({
            "success": true,
            "meals": response.data
        })
    }
}

export default ProductController