// import { MongoClient } from 'mongodb';
const cors=require("cors");

const express=require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


const mongoose = require('mongoose');
const mongoAtlasUsr = 'mongodb+srv://maneeshkolli:8OPPKrK2s2eYBdSc@profsdata.culo9rf.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoAtlasUsr, { dbName: "profsDetails", useNewUrlParser: true, useUnifiedTopology: true })

const ratingSchema = new mongoose.Schema({
    courseQuality: Number,
    responsiveness: Number,
    lod: Number,
    course: String,
    date: Date,
    helpfulness: Number,
    feedback: String
  });

const newSchema = new mongoose.Schema({
    name: String,
    school: String,
    dept: String, 
    courses: Array,
    rating: Number,
    lod: Number,
    totRatings: Number,
    userRatings: [ratingSchema],
    courseQuality: Number,
    helpfulness: Number,
    responsiveness: Number
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

app.post('/ratedData', async(req, res) => {
    const dataObj = req.body;
    console.log(dataObj);
    let newPuppy = await newModel.findOne({ _id: dataObj.objectId })
    let initialRatings = newPuppy.userRatings.length;
    let newTotRatings = initialRatings + 1;
    let initialResponsiveness = newPuppy.responsiveness;
    let initialHelpfulness = newPuppy.helpfulness;
    let initialLod = newPuppy.lod;
    let initialqual = newPuppy.courseQuality;    
    if (initialRatings == 0) {
        initialResponsiveness = 0;
        initialHelpfulness = 0;
        initialLod = 0;
        initialqual = 0;
    }
    
    let newResponsiveness = (initialResponsiveness * initialRatings + dataObj.responsiveness)/newTotRatings;
    let newLOD = (initialLod * initialRatings + dataObj.lod)/newTotRatings;
    let newHelpfulness = (initialHelpfulness * initialRatings + dataObj.helpfulness)/newTotRatings;
    let newqual = (initialqual * initialRatings + dataObj.courseQuality)/newTotRatings;
    const newRating = Number(((newResponsiveness + newLOD + newHelpfulness + newqual) / 4).toFixed(1));
    console.log("newrespo: ", newResponsiveness)
    await newModel.findOneAndUpdate(
        { _id: dataObj.objectId },
        { 
            $push: { userRatings: dataObj },
            $set: {
                totRatings: newTotRatings,
                responsiveness: newResponsiveness,
                helpfulness: newHelpfulness,
                lod: newLOD,
                courseQuality: newqual,
                rating: newRating
            }
        },
        { new: true }
    )
    .then(doc => {
        try {
            // console.log(doc.totRatings);
        } catch (err) {
            console.log(err);
        }
        
        res.send('Data received and saved!');
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Error while saving data to database.');
    });
});
  


app.listen(5000, () => {console.log('connection was made on 5000')});