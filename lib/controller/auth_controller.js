import UserTable from "../db/user_table.js";
import failerHelper from "../helper/failer_helper.js";
import Validator from "../helper/validator.js";
import jsonWebToken from 'jsonwebtoken'

class AuthController {

    static login = async (req,res)=>{
        if(!Validator.emailPasswordValidation(req,res)) return;
        const response = await this.#validateDataBaseResponse(req.body,res);
        if(!response) return;
        response.Bearer = this.#generateBrearToken(response);
        return res.status(201).json({
           "success":true,
           "data":response,
        });
    };

    static sign = async (req,res) =>{
        if(!Validator.emailPasswordValidation(req,res)) return;
        
    };

    static #validateDataBaseResponse =  async ({email},res) =>{
        const response = await UserTable.getUsers(email);
        if(!response || response.length === 0){
         failerHelper(res,"No users found",401);
         return null;
        }
        delete response.password;
        return response;
    }

    static #generateBrearToken = (dataBaseResponse) =>{
        const token = jsonWebToken.sign(dataBaseResponse,process.env.BREAR_TOKEN);
        return token;
    }
}

export default AuthController