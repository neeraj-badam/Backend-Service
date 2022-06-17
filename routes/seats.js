const express = require('express')
const router = express.Router()

const Seats = require('../models/Seats');

router.post('/seats',async(req,res) =>{
    
    const {name,noOfSeats,seats} = req.body;
        
    const seat = new Seats({
        name: name,
        noOfSeats: noOfSeats,
        seats: seats
    });

    try{
        await seat.save();
        res.send({'booked':true});
    }
    catch(err)
    {
        res.send({'booked':false});
    }
})

router.get('/seats',async(req,res) =>{
    console.log("Reuets");
    try{
        const database = await Seats.find({})
        let filledSeats = [];
        database.forEach( (data) => {
            filledSeats.push(...data.seats);
        });
        console.log(database);
        res.send({filledSeats:filledSeats});
    }
    catch(err)
    {
        res.send('error'+err)
    }
})
module.exports = router