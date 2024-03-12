// use this init folder just intlize the sample data run the index.js file and intilize your db for use
// i am using the portfolio db and carsdetails collection for the database.

const mongoose=require("mongoose");
const initdata=require("./data.js");
const carsDetails=require("../Model/Database.js");

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


// first time intilization of the database:

const initDb =async ()=>{
    // if there is old data we are going to delete the whole data.
    await carsDetails.deleteMany({});
    await carsDetails.insertMany(initdata.data);
    console.log("New data is intilized")
}
initDb();