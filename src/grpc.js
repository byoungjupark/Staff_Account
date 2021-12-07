"use strict";
exports.__esModule = true;
exports.updatePassword = exports.login = exports.signup = void 0;
var dotenv = require("dotenv");
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
var PROTO_PATH = 'src/staff.proto';
var packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
var staff_proto = grpc.loadPackageDefinition(packageDefinition).v1;
dotenv.config();
var hostname = process.env.GRPC_HOSTNAME;
var port = process.env.GRPC_PORT;
// @ts-ignore
var client = new staff_proto.StaffService("".concat(hostname, ":").concat(port), grpc.credentials.createInsecure());
// Request to grpc server
var signup = function signup(staff) {
    return new Promise(function (resolve, reject) {
        client.CreateStaff({ 'email': staff.email, 'password': staff.password, 'en_name': staff.en_name }, function (err) {
            if (err) {
                reject(err.details);
            }
            else {
                resolve("");
            }
        });
    });
};
exports.signup = signup;
var login = function login(req) {
    return new Promise(function (resolve, reject) {
        client.Login({ 'email': req.email, 'password': req.password }, function (err, response) {
            if (err) {
                reject(err.details);
            }
            else {
                resolve(response.uuid);
            }
        });
    });
};
exports.login = login;
var updatePassword = function updatePassword(uuid, req) {
    return new Promise(function (resolve, reject) {
        client.UpdatePassword({ 'uuid': uuid, 'origin_password': req.origin_password, 'update_password': req.update_password, 'check_password': req.check_password }, function (err) {
            if (err) {
                reject(err.details);
            }
            else {
                resolve("");
            }
        });
    });
};
exports.updatePassword = updatePassword;
