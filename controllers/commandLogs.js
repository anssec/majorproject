const commandLogs = require("../models/commandLogs");
const Response = require("../utils/Response");
exports.commandGetData = async (req, res) => {
  try {
    const data = await commandLogs.find();
    // console.log(data);
    return Response(res, true, "", 200, data);
  } catch (error) {
    console.log(error);
    return Response(res, false, "Internal Server error", 500);
  }
};
