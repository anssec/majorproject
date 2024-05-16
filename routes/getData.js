const express = require("express");
const { sysGetData } = require("../controllers/sysLog");
const { commandGetData } = require("../controllers/commandLogs");
const { login } = require("../controllers/login");
const router = express.Router();

router.get("/sysLog", sysGetData);
router.get("/commandLogs", commandGetData);
router.post("/login", login);
module.exports = router;
