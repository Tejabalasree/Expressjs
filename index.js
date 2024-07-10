//es7 style
import express from 'express';
import mongoose from 'mongoose';
import sampleRouter from './routes/sampleservice.js';
import newProductRouter from './routes/addproducts.js';
const app = express();

//middleware logic
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//database logic
mongoose.connect("mongodb://127.0.0.1:27017/flipkartdb")
.then(()=>console.log("database connected"))
.catch((err)=>console.log(err));

//router logic
app.use("/",sampleRouter);
app.use("/flipkart/add",newProductRouter);


//server logic
app.listen(4000,()=>{
    console.log("server running on port 4000!!!");
})




