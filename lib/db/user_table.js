import supabase from './db_config.js'

class UserTable {
   static getUsers = async (email)=>{
    const { data } = await supabase
           .from('users')
           .select('*')
           .eq('email',email);
    return data;
   };
}

export default UserTable;