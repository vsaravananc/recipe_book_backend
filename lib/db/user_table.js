import supabase from './db_config.js'

class UserTable {
   static getUsers = async (email) => {
      const { data } = await supabase
         .from('users')
         .select('*')
         .eq('email', email)
         .maybeSingle();
      return data;
   };

   static insertUser = async (email, hasedPassword) => {
      const response = await supabase.from("users").insert(
         [
            {
               "email": email,
               "password": hasedPassword
            }
         ]
      ).select();
   }
}

export default UserTable;