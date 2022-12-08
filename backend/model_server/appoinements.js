const mongoose = require('mongoose');

const appointmentsSchema = mongoose.schema({
    bloodbank: String,
    patientNO: Number,
    time: String,
    bloodgroup: String,
    date: String
});
module.exports=mongoose.model("bloodbanktable",appointmentsSchema);
