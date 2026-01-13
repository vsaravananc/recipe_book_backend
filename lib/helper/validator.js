import failerHelper from "./failer_helper.js";
class Validator{
    static emailValidation = (req,res) =>{
        const { email , password } = req.body;
        if(!email && !password){
           failerHelper(res ,'Eamil and password are requried');
           return false;
        }else if(!email) {
           failerHelper(res ,'Eamil required');
           return false;
        } else if(!password){
           failerHelper(res ,'Password required');
           return false;
        }
        return true;
    }
}

export default Validator;