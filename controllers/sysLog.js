const dataBasesysLog = require("../models/sysLog");
const Response = require("../utils/Response");
const nodeCache = require("../utils/nodeCash");
exports.sysGetData = async (req, res) => {
  try {
    let sysLog;
    if (nodeCache.has("sysLog")) {
      sysLog = JSON.parse(nodeCache.get("sysLog"));
      Response(res, true, "", 200, sysLog);
      return;
    } else {
      const user = await dataBasesysLog.find({});
      sysLog = user;
      nodeCache.set("sysLog", JSON.stringify(sysLog));
      Response(res, true, "", 200, sysLog);
      return;
    }
  } catch (error) {
    console.log(error);
    return Response(res, false, "Internal Server error", 500);
  }
};
