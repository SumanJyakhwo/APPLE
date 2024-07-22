import express from "express"

import {addFood, editFood, listFood, listFoodById, removeFood} from "../controllers/foodConroller.js"

const foodRouter = express.Router();

//Image storage engine


import multer from "multer"



const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }

})

const upload = multer({storage:storage})
foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove",upload.single("image"),  removeFood)
foodRouter.patch("/edit/:id", editFood)
foodRouter.get('/get/:id', listFoodById);

export default foodRouter;