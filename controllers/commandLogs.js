const dataBasecommandLogs = require("../models/commandLogs");
const Response = require("../utils/Response");
const nodeCache = require("../utils/nodeCash");
exports.commandGetData = async (req, res) => {
  try {
    let commandLogs;
    if (nodeCache.has("commandLogs")) {
      commandLogs = JSON.parse(nodeCache.get("commandLogs"));
      Response(res, true, "", 200, commandLogs);
      return;
    } else {
      const user = await dataBasecommandLogs.find({});
      commandLogs = user;
      nodeCache.set("commandLogs", JSON.stringify(commandLogs));
      Response(res, true, "", 200, commandLogs);
      return;
    }
    const data = await commandLogs.find();
    // console.log(data);
    return Response(res, true, "", 200, data);
  } catch (error) {
    console.log(error);
    return Response(res, false, "Internal Server error", 500);
  }
};
