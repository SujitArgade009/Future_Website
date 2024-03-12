const express = require('express');
const router = express.Router();
const CARS = require('../Model/Database');

// Route to create a new item
router.post("/api/cars",async (req,res)=>{
    try{
        const newCar=new CARS({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                carModel:req.body.carModel,
        });
        const savedItem = await newCar.save();
        res.status(201).json(savedItem);
    }catch(err){
        // console.log("Error For Pushing the data: "+err);
        res.status(400).json({message: err.message});
    }
})
module.exports = router;
