
const failerHelper =(res , message) =>{
   return res.status(422).json({
     "Success":false,
     message
   });
}

export default failerHelper