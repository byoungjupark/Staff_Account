const PROTO_PATH = 'src/staff.proto';

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
const staff_proto = grpc.loadPackageDefinition(packageDefinition).v1;
const client = new staff_proto.StaffService('localhost:50051', grpc.credentials.createInsecure());


export const signup = function signup(email, password, en_name) {
    return new Promise((resolve, reject) => {
        client.CreateStaff(
            {'email':email, 'password':password, 'en_name':en_name},
            (err) => {
                if (err) {
                    reject (err.details)
                } else {
                    resolve ("")
                }
            }
        )
    })
}


export const login = function login(email, password) {
    return new Promise((resolve, reject) => {
        client.Login(
            {'email':email, 'password':password},

            (err, response) => {
                if (err) {
                    reject (err.details)
                } else {
                    resolve (response.uuid)
                }
            }
        )
    })
}


export const updatePassword = function updatePassword(uuid, origin_password, update_password, check_password) {
    return new Promise((resolve, reject) => {
        client.UpdatePassword(
            {'uuid': uuid, 'origin_password': origin_password, 'update_password': update_password, 'check_password': check_password},
            (err) => {
                if (err) {
                    reject (err.details)
                } else {
                    resolve ("")
                }
            }
        )
    })
}
