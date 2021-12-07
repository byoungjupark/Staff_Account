"use strict";
exports.__esModule = true;
exports.verifyToken = void 0;
var jwt = require("jsonwebtoken");
var config_1 = require("./config");
var verifyToken = function (req) {
    var token = req.headers.authorization;
    var uuid = jwt.verify(token, config_1.secret_key);
    return uuid.uuid;
};
exports.verifyToken = verifyToken;
