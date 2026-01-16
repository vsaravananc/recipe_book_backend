
const failerHelper =(res , message ,statuscode) =>{
   return res.status(statuscode || 422).json({
     "Success":false,
     message
   });
}

export default failerHelper