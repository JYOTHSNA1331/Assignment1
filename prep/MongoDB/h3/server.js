const mongoose = require("mongoose")
const employeess = require('./model')
const port = 4000;
const express = require("express");
const app = express();
const data = require('./data')
const router = express.Router()

var uri = "mongodb://127.0.0.1:27017/Human_Resource"

mongoose.connect(uri,(err,db)=>{
    console.log("MongoDB database connection established successfully");
})

app.use("/",router)


router.route("/fetchdata").get(function(req,res){
    employeess.find({},function(err,result){
        if(err)
        res.send(err)
        else
        res.send(result)
    })
})


const q2= async (req,res)=>{
    try {
        const responce=await employees.find({salary:{$gt:"30000"}});
        console.log("Responce =>",responce);
        res.status(200).send({success:responce})

    } catch (error) {
        console.log("Error is occured while fetching the data");
       return res.status(500).send({message:"Error is occured while fetching the data"});
    }
 }

 const q3= async (req,res)=>{
    try {
        const responce=await employees.find({overallExp:{$gt:"2"}});
        console.log("Responce =>",responce);
       res.status(200).send({success:responce})

    } catch (error) {
        console.log("Error is occured while fetching the data");
        return res.status(500).send({message:"Error is occured while fetching the data"});
    }
 }

 

 const q4= async (req,res)=>{
    try {
        const responce=await employees.find({overallExp:{$gt:"1"},yearGrad:{$gt:"2015"}});
        console.log("Responce =>",responce);
        res.status(200).send({success:responce})

    } catch (error) {
        console.log("Error is occured while fetching the data");
        return res.status(500).send({message:"Error is occured while fetching the data"});
    }
 }

 const q5= async (req,res)=>{
    try {
        const responce=await employees.updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}});
        console.log("Responce =>",responce);
       res.status(200).send({success:responce})

    } catch (error) {
        console.log("Error is occured while fetching the data");
       return res.status(500).send({message:"Error is occured while fetching the data"});
    }
 }

 const q6= async (req,res)=>{
    try {
        const responce=await employees.deleteMany({lastCompany:"Y"});
        console.log("Responce =>",responce);
      

    } catch (error) {
        console.log("Error is occured while fetching the data");
    }
 }
 
app.listen(port, function() {
    console.log("Server is running on Port: " + port);
  });

