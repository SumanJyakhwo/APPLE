import User from "../models/userModels.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Login user
const loginUser = async (req, res) => {
  const {email,password}=req.body;
  try{
    const user=await User.findOne({email})

    //this will check if the user exists or not
    if(!user){
      return res.json({success:false,message:"Email doesnt exist"})
    }
    const isMatch=await bcrypt.compare(password,user.password)

    //check if the password matches or not
    if(!isMatch){
      return res.send({success:false,message:"Invalid credentials !!"})
    }
    const token = createToken(user._id)
    res.json({success:true,token})
  }
  catch(error){
    console.log(error)
    res.json({success:false,message:"error"})
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    // Check if the user already exists
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Validate email format
    if (typeof email !== 'string' || !validator.isEmail(email)) {
      return res.status(400).send({ error: 'Invalid email format' });
    }

    // Validate password length
    if (password.length < 8) {
      return res.json({ success: false, message: "Password should be at least of 8 characters" });
    }

    // Encrypt or hash user password
    const salt = await bcrypt.genSalt(10); // genSalt value lies between 5-15 so higher the value more secure hash becomes
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };
