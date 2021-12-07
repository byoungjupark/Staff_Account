"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var config_1 = require("./config");
app_1["default"].listen(config_1.client_port, function () { console.log("app is running ".concat(config_1.client_hostname, ":").concat(config_1.client_port)); });
