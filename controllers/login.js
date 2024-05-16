const User = require("../models/user"); // Assuming userModel.js exports the User model
const Response = require("../utils/Response");
const Jwt = require("jsonwebtoken");
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find a user with the provided username
    const user = await User.findOne({ username });
    // If no user found, return null
    if (!user) {
      return Response(res, false, "user not found", 404);
    }
    // Check if the password matches
    const isPasswordValid = password == user.password;

    // If password doesn't match, return null
    if (!isPasswordValid) {
      return Response(res, false, "invalid password", 306);
    }
    const payload = {
      username: user.username,
      id: user._id,
    };
    const token = Jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "6h",
    });
    const options = {
      httpOnly: true,
      expires: new Date(Date.now() + 12 * 60 * 60 * 1000),
    };
    return res.cookie("token", token, options).status(200).json({
      success: true,
      message: `Login successfull`,
      data: token,
    });
    // If both username and password are valid, return the user
  } catch (error) {
    // Handle any errors
    console.error("Login failed:", error.message);
    return Response(res, false, "Internal server error Try Again", 500);
  }
};
