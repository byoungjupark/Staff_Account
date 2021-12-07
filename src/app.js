"use strict";
exports.__esModule = true;
var express = require("express");
var staffController = require("./client");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Client Endpoint
app.post('/staff/signup', staffController.postSignup);
app.get('/staff/login', staffController.getLogin);
app.patch('/staff/update', staffController.updatePassword);
exports["default"] = app;
