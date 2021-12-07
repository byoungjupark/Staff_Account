import * as dotenv from 'dotenv';

import app from './app';

dotenv.config();
const hostname = process.env.CLIENT_HOSTNAME;
const port = process.env.CLIENT_PORT;


app.listen(port, () => {console.log(`app is running ${hostname}:${port}`)})

