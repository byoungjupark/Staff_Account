const express = require('express')
const app = express()
const router = express.Router()

const hostname = '127.0.0.1';
const port = 3000;

const grpc = require('./grpc.js')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/staff', router)

// CLIENT ENDPOINT
app.post('/signup', (req, res) => {
    try{
        console.log('1')
        grpc.main(req.body.email, req.body.password, req.body.en_name)
        console.log('2')
        res.status(200).send('CREATED')
        console.log('3')
    }catch(err){
        console.log('catch err', err);
        res.status(400).send(err)

    }

    // if (grpc.main(req.body.email, req.body.password, req.body.en_name)) {
    //     res.status(200).send('CREATED')
    // } else {
    //     res.status(400).send('err')
    // }

})

app.listen(port, () => {console.log(`Example app listening at http://${hostname}:${port}`)})
