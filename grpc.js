const PROTO_PATH = __dirname + '/account.proto';

const parseArgs = require('minimist');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const express = require("express");
const {response} = require("express");
const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
const account_proto = grpc.loadPackageDefinition(packageDefinition).account;

const client = new account_proto.Account('localhost:50051', grpc.credentials.createInsecure());

function main(email, password, en_name) {
    client.signup(
        {'email':email, 'password':password, 'en_name':en_name},
        function(err, response) {
            // console.log(email, password, en_name);
            // console.log('message: ', err);
            if(err) {
                console.log('grpc err', err.details)
                throw err.details
            } else {
                return false
            }

        }
    )
}

// main();
exports.main = main;