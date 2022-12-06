import express from 'express'; 
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/router.js';
import {} from 'dotenv/config'

const app = express()
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(router);


const port = process.env.PORT || 3001

const DB = "mongodb+srv://awais:1234@pmscluster.07d5y1y.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("Database connected"))
.catch((error)=> console.log(error.message));




app.listen(port, () => {
    console.log(`PMS listening on port ${port}`)
})