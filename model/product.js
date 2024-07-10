import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    Image:{
        type:String,
        required:true
    }
})

const product = mongoose.model("products",productSchema)
export default product;