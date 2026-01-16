import supabase from "./db_config.js";

class CategorieTable {
    static getCategories = async () => {
        const respose = await supabase.from('categories').select('*');
        return respose;
    }

    static getSpecificItems = async (categoryName) => {
        const response = await supabase
            .from('product')
            .select("strMeal,strMealThumb,idMeal")
            .eq('strCategory', categoryName);
        return response;
    }

    static getProductDetail = async (idMeal) => {
        const response = await supabase
            .from("product")
            .select('*')
            .eq('idMeal', idMeal);
        return response;
    }
}

export default CategorieTable