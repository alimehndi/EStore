import express from'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js';


const port = process.env.PORT;
import productRoute from './routes/productRoutes.js';
connectDB();//connect to mongodb
const app = express();

app.get('/',(req , res)=>{

    res.send('Api is Running')
});

app.use('/api/products',productRoute);

app.use(notFound);
app.use(errorHandler);




app.listen(port,()=>{
    console.log(`server is running on port ${port}`)

});

