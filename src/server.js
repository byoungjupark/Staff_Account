"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var app_1 = require("./app");
dotenv.config();
var hostname = process.env.CLIENT_HOSTNAME;
var port = process.env.CLIENT_PORT;
app_1["default"].listen(port, function () { console.log("app is running ".concat(hostname, ":").concat(port)); });
