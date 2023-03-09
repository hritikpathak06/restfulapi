const express = require('express');
const Student = require("../models/students");
const router = new express.Router();



// create new student using async await
router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body)
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (err) {
        res.status(400).send(err);
    }
})
// **************************************************************************************************
// Read/GET data of student registration
router.get("/students", async (req, res) => {
    try {
      const studentsData = await Student.find();
      res.send(studentsData)
    } catch (err) {
        res.status(400).send(err);
    }
})

// getting data using id
router.get("/students/:id", async(req,res) => {
    try{
       const _id = req.params.id;
       const studentData = await Student.findById({_id})
       if(!studentData){
        res.status(404).send();
       }else{
           res.send(studentData);
       }
    }catch(e){
        res.send(e)
    }
})

// **************************************************************************************************

// Update the students by its id
router.patch("/students/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const updateData = await Student.findByIdAndUpdate(_id, req.body,{
            new:true
        });
        res.send(updateData);
    }catch(err){
        res.send(err)
    }
})

// *******************************************************************************
// delete students registration
router.delete("/students/:id", async(req,res) => {
    try{
     const _id = req.params.id;
     const deleteData =  await Student.findByIdAndDelete(_id);
     res.send(deleteData);
    }catch(err){
        res.status(404).send(err);
    }
})
// *******************************************************************************


module.exports = router;