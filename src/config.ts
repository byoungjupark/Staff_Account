import * as dotenv from 'dotenv';


dotenv.config();

export const secret_key: any = process.env.SECRET_KEY;
export const client_hostname = process.env.CLIENT_HOSTNAME;
export const client_port = process.env.CLIENT_PORT;
export const grpc_hostname = process.env.GRPC_HOSTNAME;
export const grpc_port = process.env.GRPC_PORT;
