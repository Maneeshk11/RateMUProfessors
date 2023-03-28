// import { MongoClient } from 'mongodb';
const cors=require("cors");

const express=require('express');
const app = express();

app.use(cors());


const mongoose = require('mongoose');
const mongoAtlasUsr = 'mongodb+srv://maneeshkolli:8OPPKrK2s2eYBdSc@profsdata.culo9rf.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoAtlasUsr, { dbName: "profsDetails", useNewUrlParser: true, useUnifiedTopology: true })


const newSchema = new mongoose.Schema({
    name: String,
    school: String,
    dept: String, 
    courses: Array,
    rating: Number,
    lod: Number
}, {collection: 'profs'});

const newModel = mongoose.model("profs", newSchema);

// const data = async () => {
//     result = await newModel.find();
//     console.log(result);
// }
// data();
app.get('/profs/all',async (req, res) => {
    const result = await newModel.find();
    res.send(result);
})

app.get('/profs/ecsoe',async (req, res) => {
    const result = await newModel.find({school: "ECSoE"});
    res.send(result);
})

app.get('/profs/sol', async (req, res) => {
    const result = await newModel.find({school: "SOL"});
    res.send(result);
})

app.get('/profs/som', async (req, res) => {
    const result = await newModel.find({school: "SOM"});
    res.send(result);
})

app.get('/profs/imsoe', async (req, res) => {
    const result = await newModel.find({school: "IMSOE"});
    res.send(result);
})




app.listen(5000, () => {console.log('connection was made on 5000')});