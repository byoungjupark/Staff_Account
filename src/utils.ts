import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { secret_key } from "./config";


export const verifyToken = (req: Request) => {
    return new Promise((resolve, reject) => {
        const token: any = req.headers.authorization;
        if (!token) {
            reject ("NOT_LOGGED_IN")
        } else {
            const uuid = jwt.verify(token, secret_key)
            resolve (uuid)
        }
        }
    )
}