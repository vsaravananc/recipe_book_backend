import 'dotenv/config'
import express from 'express'
import AuthRouter from './lib/routes/auth_route.js';


const app = express();
app.use(express.json());
app.use(AuthRouter);

app.get('/',(req,res)=>{
    res.json({
        'happy':"tolearn"
    });
})

const port = process.env.PORT || 4000;

app.listen(port,(_)=>{
    console.log(`https://localhost:${port}`);
});