const userRoute = require("./routes/user-routes.js")
const dashboardMenusRoute = require("./routes/dashboard-menus-routes.js")
const express = require('express');
const mongoose = require('mongoose');

const {Schema} = mongoose;
const cors = require('cors');
const bodyParser = require("body-parser");
require('dotenv').config();

// gaurav

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL).then(()=> {
  console.log("mongo database connected successfull")
  app.listen(PORT,() => {
    console.log(`SERVER  is running on port ${PORT}`)
  })
}).catch(err => console.log(err));

app.use("/api/user",userRoute)


app.use("/api",dashboardMenusRoute)

/**
 * below is the get about us list
 */
const aboutUsSchema = new Schema({
  name:String
},{ versionKey: false,
  collection: "hear-about-us-list" 
 })

const modelHearAboutUsList = mongoose.model("HearAboutUsList",aboutUsSchema)

app.get("/api/hear-about-us-list", async (req, res) => {
  try {
    const result = await modelHearAboutUsList.find();
    res.json(result);
  } catch (error) {
    console.error("Error fetching hear-about-us-list:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * below is the get service provide list
 */
const serviceProvideSchema = new Schema({
  name:String
},{ versionKey: false,
  collection: "service-provide" 
 })

const modelServiceProvideSchema = mongoose.model("ServiceProvideList",serviceProvideSchema)

app.get("/api/service-provide", async (req, res) => {
  try {
    const result = await modelServiceProvideSchema.find();
    res.json(result);
  } catch (error) {
    console.error("Error fetching service provide:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


/**
 * below is the get service provide list
 */
const sizeOfTeamSchema = new Schema({
  name:String
},{ versionKey: false,
  collection: "size-of-team" 
 })

const modelSizeOfTeam = mongoose.model("SizeOfTeam",sizeOfTeamSchema)

app.get("/api/size-of-team", async (req, res) => {
  try {
    const result = await modelSizeOfTeam.find();
    res.json(result);
  } catch (error) {
    console.error("Error fetching size of team:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}); 

app.get("/login", async (req, res) => {
  try {
    const result = await modelSizeOfTeam.find();
    res.json(result);
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


