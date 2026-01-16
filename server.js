import 'dotenv/config'
import express from 'express'
import AuthRouter from './lib/routes/auth_route.js';
import ProductRouter from './lib/routes/v1/product_route.js';

const app = express();
app.use(express.json());
app.use(AuthRouter);
app.use(ProductRouter);


const port = process.env.PORT || 4000;

app.listen(port,(_)=>{
    console.log(`https://localhost:${port}`);
});