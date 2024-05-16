const sysLog = require("../models/sysLog");
const Response = require("../utils/Response");
exports.sysGetData = async (req, res) => {
  try {
    const data = await sysLog.find({});
    // console.log(data);
    return Response(res, true, "", 200, data);
  } catch (error) {
    console.log(error);
    return Response(res, false, "Internal Server error", 500);
  }
};
