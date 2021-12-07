import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { secret_key } from "./config";


export const verifyToken = (req: Request) => {
    const token: any = req.headers.authorization
    const uuid: any = jwt.verify(token, secret_key)

    return uuid.uuid
}