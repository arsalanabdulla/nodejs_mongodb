const mongoose =require("mongoose");

const productSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"enter product name"]
        },
        qty:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true,
            default:0
        },
        Image:{
            type:String,
            required:false
        }
    },
    {
        timestamps:true
    }
);

const Product=mongoose.model("Product",productSchema)

module.exports=Product;
