const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, (err) => {
    if(!err){
        console.log('Application is running on PORT 3000');
    }else {
        console.log('Failed to connect to port 3000');
    }
});

const conString = "mongodb://localhost/practicepj";
mongoose.connect(conString, (err) => {
    if (!err){
        console.log('Connected to MongoDB');
    }else {
        console.log('Failed to connect to MongoDB :c');
    }
});

const custom = require('./routes/custom');

app.use('/custom', custom);