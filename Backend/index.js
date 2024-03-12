const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path = require('path');
const PORT = process.env.PORT || 5000;
const cors=require("cors");
const CARS=require("../Backend/Model/Database.js")

// Database connection with Mongodb
async function  main(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/Portfolio');
        console.log("Connected Succesfully to DB");
    }catch(err){
        console.log( "Error Connecting to MongoDB database:: "+err);
    }
}
// Run the database connection function
main().then(()=>{
    console.log("Database Connected");
})
.catch(err => console.log(err));

// this is called cross=Cross-Origin Resource Sharing(used the reactsjs connection establishement with backend express using the )
app.use(cors());


app.listen(PORT,()=>{
    console.log("Server Running on the port 5000");
});

app.get("/",(req,res)=>{
    res.send("On Root Working Perfectly fine");
});






















































// this is used for the checking the model is inseting the data for the first time how will it work.



// Create demo database for the intilization of the data base:
// let car1= new CARS({
//     name:"Fortuner",
//     description:"Hard route car",
//     price:50,
//     dateofmfg: new Date(),
//     carModel:"Latest 2023",
//     image:"https://images.unsplash.com/photo-1681762288013-985f40bf7e05?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// });

// async function saveData(){
//     try{
//         let datasaved= await car1.save();
//         console.log("Database intilization successfully"+ datasaved);
//     }catch(err){
//         console.log("Here is the error"+ err);
//     }
//  }
// saveData();
