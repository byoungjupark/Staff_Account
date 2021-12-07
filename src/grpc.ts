import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { grpc_hostname, grpc_port } from './config';

const PROTO_PATH = 'src/staff.proto';
const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
const staff_proto = grpc.loadPackageDefinition(packageDefinition).v1;

// @ts-ignore
const client = new staff_proto.StaffService(`${grpc_hostname}:${grpc_port}`, grpc.credentials.createInsecure());


// Type
interface Staff {
    email: string;
    password: string;
}

interface newStaff extends Staff {
    en_name: string;
}

interface uuid {
    uuid: string;
}

interface updatePassword {
    origin_password: string;
    update_password: string;
    check_password: string;
}


// Request to grpc server
export const signup = function signup(staff: newStaff) {
    return new Promise((resolve, reject) => {
        client.CreateStaff(
            {'email':staff.email, 'password':staff.password, 'en_name':staff.en_name},
            (err: any) => {
                if (err) {
                    reject (err.details)
                } else {
                    resolve ("")
                }
            }
        )
    })
}


export const login = function login(req:Staff) {
    return new Promise((resolve, reject) => {
        client.Login(
            {'email':req.email, 'password':req.password},
            (err: any, response: any) => {
                if (err) {
                    reject (err.details)
                } else {
                    resolve (response.uuid)
                }
            }
        )
    })
}


export const updatePassword = function updatePassword(uuid: uuid, req:updatePassword) {
    return new Promise((resolve, reject) => {
        client.UpdatePassword(
            {'uuid': uuid, 'origin_password': req.origin_password, 'update_password': req.update_password, 'check_password': req.check_password},
            (err: any) => {
                if (err) {
                    reject (err.details)
                } else {
                    resolve ("")
                }
            }
        )
    })
}
