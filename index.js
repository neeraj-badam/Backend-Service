const express = require('express')
var cors = require('cors')
const app = new express()



//db.js

const mongoose = require('mongoose')

const url = `mongodb+srv://bneeraj27:bneeraj27@cluster0.qxzwb.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. ${err}`);
    })


app.use(cors())

app.use(express.json())


const seatsRouter = require('./routes/seats')

app.use('/booking',seatsRouter)

require("dotenv").config();

console.log(process.env.PORT || 5000)

app.listen(process.env.PORT || 5000,() =>
{
    console.log("server started")
})
