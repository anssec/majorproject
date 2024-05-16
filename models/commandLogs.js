const mongoose = require("mongoose");

const commandLogsSchema = new mongoose.Schema({
  User: {
    type: String,
  },
  Command: {
    type: String,
  },
});
module.exports = mongoose.model("commandLogs", commandLogsSchema);
