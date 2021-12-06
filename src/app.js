import express from 'express';
const app = express();

import * as staffController from './client.js';


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Client Endpoint
app.post('/staff/signup', staffController.postSignup)
app.get('/staff/login', staffController.getLogin)
app.patch('/staff/update', staffController.updatePassword)

export default app;