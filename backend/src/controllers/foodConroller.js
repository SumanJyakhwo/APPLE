import foodModel from "../models/foodModel.js"

import fs from "fs"


//add food item
const addFood = async(req, res) => {
    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
        
    })
    try{
        await food.save();
        res.json({success: true, message: "Food Added"})
    }
    catch(error){
        console.log(error)
        res.json({success: false, message: "Error"})

    }
}


// all food list
const listFood = async(req, res) => {
 try{
    const foods = await foodModel.find({});
    res.json({success: true, data: foods})

 }
 catch(error){
    console.log(error)
    res.json({success: false, message: "Error"})

 }
}


//remove food items
const removeFood = async(req, res) => {
    try{
       const food = await foodModel.findById(req.body.id);
       fs.unlink(`uploads/${food.image}`, ()=>{})

       await foodModel.findByIdAndDelete(req.body.id)
       res.json({success: true, message: "Food Removed"})
   
    }
    catch(error){
       console.log(error)
       res.json({success: false, message: "Error"})
   
    }
   }

   const editFood = async (req, res) => {
    const foodId = req.params.id;
    
    try {
        const updatedFood = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category
        };

       

        const updatedFoodItem = await foodModel.findByIdAndUpdate(foodId, updatedFood, { new: true });

        if (!updatedFoodItem) {
            return res.status(404).json({ success: false, message: "Food not found" });
        }

        res.json({ success: true, message: "Food updated successfully", data: updatedFoodItem });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
   
   const listFoodById = async (req, res) => {
    try {
      const foodId = req.params.id; // Retrieve the food ID from request parameters
      const food = await foodModel.findById(foodId); // Find food item by ID in the database
  
      if (!food) {
        return res.status(404).json({ success: false, message: "Food not found" });
      }
  
      res.json({ success: true, data: food });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  };
  
export {addFood ,listFood, removeFood, editFood, listFoodById}