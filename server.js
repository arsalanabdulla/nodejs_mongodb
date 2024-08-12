const express=require('express');
const mongoose = require('mongoose');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const productRoute=require("./routes/product.js")


app.use("/api/products",productRoute);

app.get("/",(req,res)=>{
    res.send("Hello from mongodb & node API");
})

const url = 'mongodb://localhost:27017/';
const options = {    
    family: 4 // Use IPv4, skip trying IPv6
}
mongoose.connect(url,options)
.then(() =>{
    console.log('DB Connected!')
    app.listen(3000,()=>{
        console.log("server running on port 3000");    
    })
})
.catch((err)=> console.log(err))