import User from "../models/userModels.js"

//add items to user cart
const addToCart=async (req,res)=>{
  try {
    let userData=await User.findOne({_id:req.body.userId});
    let cartData= await userData.cartData;
    if(!cartData[req.body.ItemId]){
      cartData[req.body.ItemId]=1
    }
    else{
      cartData[req.body.ItemId]+=1
    }
    await User.findByIdAndUpdate(req.body.userId,{cartData})
    res.json({success:true,message:"Added to cart"})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
  }
}

//remove from cart
const removeFromCart= async (req,res)=>{
  try {
    let userData=await User.findOne({_id:req.body.userId});
    let cartData= await userData.cartData;
    if(cartData[req.body.ItemId]>0){
      cartData[req.body.ItemId]-=1
    }
    await User.findByIdAndUpdate(req.body.userId,{cartData})
    res.json({success:true,message:"Removed from the cart"})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
  }
}

//fetch data from cart
const getCart= async (req,res)=>{
try {
  let userData=await User.findOne({_id:req.body.userId});
  let cartData=await userData.cartData
  res.json({success:true,cartData})
} catch (error) {
  console.log({success:false,message:"Erroe"})
}
}

export {addToCart,removeFromCart,getCart};