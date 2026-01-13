import UserTable from "../db/user_table.js";
import failerHelper from "../helper/failer_helper.js";
import Validator from "../helper/validator.js";

class AuthController {
    static login = async (req,res)=>{

        if(!Validator.emailValidation(req,res)) return;

        const { email , password } = req.body;
        const response = await UserTable.getUsers(email);

        if(!response || response.length === 0){
            return failerHelper(res,"No users found");
        }
        
        return res.status(201).json({
           response,
        });
    };
}

export default AuthController