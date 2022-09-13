const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();

//Connect to DB
const dbUri = 'mongodb+srv://minhbear:Minh0914121791@blogs-app.afjho9p.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbUri)
    .then(() => {
        app.listen(4000);
        console.log("listen to port 4000 ....");
    }).catch(err => {
        console.log(err);
    });

//midleware
//accessing data 
app.use(express.json());

//route
app.use('/blogs', blogRoutes);
