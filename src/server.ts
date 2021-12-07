import app from './app';
import { client_hostname, client_port } from './config';


app.listen(client_port, () => {console.log(`app is running ${client_hostname}:${client_port}`)})

