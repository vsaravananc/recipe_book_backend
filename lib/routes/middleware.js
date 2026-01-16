const middleWare = (req,res,next) =>{

    const brear = req.headers.authorization;
    
    if(!brear){
        return res.status(401).json({
            "success":false,
            "message":"Un authenticate user"
        });
    }
    next();
}

export default middleWare;