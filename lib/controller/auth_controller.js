import UserTable from "../db/user_table.js";
import bcrypt from 'bcrypt'
import failerHelper from "../helper/failer_helper.js";
import Validator from "../helper/validator.js";
import jsonWebToken from 'jsonwebtoken'

class AuthController {

    static #salt = 10;

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

    static sign = async (req,res) => {
        if(!Validator.emailPasswordValidation(req,res)) return;
        const result = await this.#checkTheUserHaveAccount(req.body);
        if(!result){
            return failerHelper(res,"The email already regestered",422);
        }
        const endCryptedPassword = await this.#generateEndCryptPassword(req.body);
        await this.#insertNewUser(req.body,endCryptedPassword);
        res.status(201).json({
            "success":true,
            "message":"Succesfully created user"
        });
        
    };

    static #validateDataBaseResponse =  async ({email,password},res) =>{
        const response = await UserTable.getUsers(email);
        if(!response || response.length === 0){
         failerHelper(res,"No users found",401);
         return null;
        }
        const checkPassword = await bcrypt.compare(password,response.password);
        if(!checkPassword){
            failerHelper(res,"Password or email does not matche.",422);
            return null;
        }
        delete response.password;
        return response;
    }

    static #generateBrearToken = (dataBaseResponse) =>{
        const token = jsonWebToken.sign(dataBaseResponse,process.env.BREAR_TOKEN);
        return token;
    }

    static #checkTheUserHaveAccount = async ({email},res) =>{
        const response = await UserTable.getUsers(email);
        if(!response || response.length == 0) return true;
        return false;
    }

    static #generateEndCryptPassword = async ({password})=>{
        const endCryptedPassword = await bcrypt.hash(password,this.#salt);
        return endCryptedPassword;
    }

    static #insertNewUser = async({email},hasedPassword) => {
        const response = await UserTable.insertUser(email,hasedPassword);
        return response;
    }

}

export default AuthController