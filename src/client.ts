import * as jwt from 'jsonwebtoken'
import * as dotenv from "dotenv";
import { Request, Response } from "express";

import * as grpc from './grpc'


dotenv.config();
const secret_key: any = process.env.SECRET_KEY;


export const postSignup = async (req: Request, res: Response) => {
    try{
        await grpc.signup(req.body);
        return res.status(201).json({'message': 'CREATED'})
    }catch(err){
        return res.status(400).json({'message': err})
    }
}


export const getLogin = async (req: Request, res: Response) => {
    try{
        const response = await grpc.login(req.body);
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


export const updatePassword = async (req: Request, res: Response) => {
    try{
        const token: any = req.headers.authorization
        const uuid: any = jwt.verify(token, secret_key)

        await grpc.updatePassword(uuid.uuid, req.body)
        return res.status(200).json({'message': 'UPDATED'})
    }catch(err){
        return res.status(400).json({'message': err})
    }
}
