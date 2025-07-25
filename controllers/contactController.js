const Contact=require('../models/Contact');

exports.addContact=async(req,res)=>{
  try{
    const newContact=new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  }catch (err){
    res.status(500).json({error: err.message});
  }
};


exports.getContacts = async(req,res) =>{
  try{
    const contacts=await Contact.find();
    res.status(200).json(contacts);
  }catch (err){
    res.status(500).json({error: err.message});
  }
};