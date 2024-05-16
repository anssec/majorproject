const mongoose = require("mongoose");
const sysLogsSchema = new mongoose.Schema({
  Date: {
    type: String, 
  },
  Time: {
    type: String,
  },
  Data: {
    type: String,
  },
});
module.exports = mongoose.model("sysLogs", sysLogsSchema);
