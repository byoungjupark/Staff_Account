"use strict";
exports.__esModule = true;
exports.verifyToken = void 0;
var jwt = require("jsonwebtoken");
var config_1 = require("./config");
var verifyToken = function (req) {
    return new Promise(function (resolve, reject) {
        var token = req.headers.authorization;
        if (!token) {
            reject("NOT_LOGGED_IN");
        }
        else {
            var uuid = jwt.verify(token, config_1.secret_key);
            console.log("1");
            console.log(uuid);
            resolve(uuid);
        }
    });
};
exports.verifyToken = verifyToken;
