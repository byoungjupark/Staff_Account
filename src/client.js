import jwt from 'jsonwebtoken'
import * as grpc from './grpc.js'
import dotenv from "dotenv";

dotenv.config();
const secret_key = process.env.SECRET_KEY;


export const postSignup = async (req, res) => {
    try{
        await grpc.signup(req.body.email, req.body.password, req.body.en_name);
        return res.status(201).json({'message': 'CREATED'})
    }catch(err){
        return res.status(400).json({'message': err})
    }

}


export const getLogin = async (req, res) => {
    try{
        const response = await grpc.login(req.body.email, req.body.password);
        const token = jwt.sign(
            {uuid: response},
            secret_key,
            {
                subject: 'loginToken',
                // expiresIn: '60m',
                issuer: 'maum-staff'
            });
        return res.status(200).json({'token': token})
    }catch(err){
        return res.status(400).json({'message': err})
    }
}


export const updatePassword = async (req, res) => {
    try{
        const token = req.headers.authorization
        const uuid = jwt.verify(token, secret_key).uuid

        await grpc.updatePassword(uuid, req.body.origin_password, req.body.update_password, req.body.check_password)
        return res.status(200).json({'message': 'UPDATED'})
    }catch(err){
        return res.status(400).json({'message': err})
    }

}
