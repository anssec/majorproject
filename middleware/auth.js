const jwt =require("jsonwebtoken") ;
require( "dotenv").config();
const Response =require("../utils/Response") ;
//auth
exports.auth = async (req, res, next) => {
  try {
    //extract token
    const token =
      req.cookies?.token.value ||
      req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      Response(res, false, "Token Is missing", 401);
      return;
    }

    //verify the token
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
    } catch (error) {
      Response(res, false, "Token Is Invalid", 404);
      return;
    }
    next();
  } catch (error) {
    Response(
      res,
      false,
      "Something went wrong while validating the token",
      401
    );
    return;
  }
};
