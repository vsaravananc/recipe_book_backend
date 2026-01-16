import supabase from "./db_config.js";

class CategorieTable {
    static getCategories = async () => {
        const respose = await supabase.from('categories').select('*');
        return respose; 
    }
}

export default CategorieTable