const express = require('express')
const app = express()
const mongoose = require(mongoose)
const dotenv = require('dotenv')
const cors = require('cors')
const appointmentsSchema = require('./model_server/appointments.js')

app.use(express.json())
app.use(cors())
app.listen(4000, ()=>
{
    console.log("server is up and running")
})

app.get('/appointmentdata',(req,res)=> {
    appointmentsSchema.find({}).then(
        items => res.json(items)
    )
})