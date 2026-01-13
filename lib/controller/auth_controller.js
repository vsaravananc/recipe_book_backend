import UserTable from "../db/user_table.js";

class AuthController {
    static login = async (req,res)=>{
        const { name , email } = req.body;
        const response = await UserTable.getUsers(email);
        return res.status(201).json({
           response,
        });
    };
}

export default AuthController