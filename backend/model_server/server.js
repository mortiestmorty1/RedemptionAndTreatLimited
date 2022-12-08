
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const appointmentsSchema = require('./appointments.js')
mongoose.connect("mongodb+srv://shoaibahmed:987654321q_@cluster0.rendijk.mongodb.net/test");

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

app.post('/postmydatalol', (req, res) => {
    const postdatalol = new appointmentsSchema(
        {
            bloodbank: req.body.bloodbank,
    patientNO: req.body.patientNO,
    time: req.body.time,
    bloodgroup: req.body.bloodgroup,
    date: req.body.date
        }
    )

    postdatalol.save()
    .then()
})


