import User from "../models/userModels.js";

// Add items to user cart
const addToCart = async (req, res) => {
  try {
    let userData = await User.findById(req.body.userId);
    let cartData = userData.cartData;
    
    if (!cartData[req.body.ItemId]) {
      cartData[req.body.ItemId] = 1;
    } else {
      cartData[req.body.ItemId] += 1;
    }

    await User.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Remove items from user cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await User.findById(req.body.userId);
    let cartData = userData.cartData;

    if (cartData[req.body.ItemId] > 0) {
      cartData[req.body.ItemId] -= 1;
    }

    await User.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Removed from the cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Fetch data from cart
const getCart = async (req, res) => {
  try {
    let userData = await User.findById(req.body.userId);
    let cartData = userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };
