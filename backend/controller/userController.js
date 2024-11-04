const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  //Do validation using express validator

  try {
    let existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({ succss: false, error: "Existing user" });
    }
    //hash password
    const salt = bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);

    let cart = {};

    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const user = new User({
      name: req.body.username,
      email: req.body.email,
      password: hashPassword,
      cartData: req.body.cart,
    });

    await user.save();

    // const data = {
    //     user:{
    //         id:user._id,
    //     }
    // }
    const token = jwt.sign({ id: user.email }, "secret_ecom");
    res.json({ success: true, token });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Signup failed, Try again later" });
  }
};

const signin = async (req, res) => {
    try{
        const existingUser = await User.findOne({ email: req.body.email });

        if (!existingUser) {
            console.log("new user");
            return res.status(404).json({ message: "Please signup to continue" });
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            existingUser.password,
        );

        if (!validPassword) {
            console.log("Password doesnt match");
            return res.status(401).json({ message: "Password incorrect" });
        }

        console.log("Log in");
        res.status(200).json({message:"Login Successfull"})

    }catch(err){
        console.log(err);
        res.status(500).json({ success: false, message: "Signin failed, Try again later" })
    }
  };

module.exports = { signup, signin };
