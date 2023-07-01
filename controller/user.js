const User = require('../models/userSchema');

const getAllNote = async (req,res)=>{
    try {
        const allUser = await User.find({});
    res.status(200).json({data:allUser})
    } catch (error) {
        res.status(400).json({error:"Please check your internet...!"})
    }
}

const createNote = async(req,res)=>{
    try {
        const {title,description} = req.body;
        await User.create({
            title,
            description
        })
        res.status(201).json({message:"New Note Add Successfully...!"})
    } catch (error) {
        res.status(400).json({error})
    }
}

const updateNote = async (req,res)=>{
    try {
        const {_id,title,description} = req.body;
      const rewriteNote =   await User.findByIdAndUpdate(
            {_id},
            req.body,
            {new:true}        
            )

     res.status(200).json({ message: "Update Successfull...!" });
        
    } catch (error) {
     res.status(400).json({ error: "Invalid Credientials...!" });
    }
}

const deleteNote = async (req,res)=>{
    try {
        await User.findByIdAndDelete({_id:req.body.id})
     res.status(200).json({ message: "Deleted Successfull...!" });
    } catch (error) {
     res.status(400).json({ error: "Invalid Credientials...!" });    
    }
}

const singleNote = async (req,res)=>{
    try {
        const editNote = await User.findById({_id:req.params.id});
        res.status(200).json({data:editNote})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getAllNote,createNote,updateNote,deleteNote,singleNote}