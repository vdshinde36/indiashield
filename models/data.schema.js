

 const mongoose = require("mongoose");


 const DataSchema = new mongoose.Schema({
 
     name : {
         type:String,
         trim:true, // remove space from end & an begining if have
         required:true,
     },
     contact_number : {
         type:String,
         trim:true, // remove space from end & an begining if have
         required:true
     },
     
     address : {
         type : String,
         default : null,
     },

     comments : { type : String },

     resource_details : {
         type : String,
         default: null
     },

     updated_date : {
         type : Date
     },

     resource : {
         type : String,
         required : true
     },

     state : {
         type : String,
         required : true
     },

     city : {
         type : String,
         required : true
     },

     verified : {
         type : String,
         required : true,
         default : 'UNVERIFIED',
         enum : ['VERIFIED', 'UNVERIFIED']
     },

     source : {
         type : String,
         default : null,
    }

 
     
 
 },{timestamps:true}); // add createdAt and updatedAt fields
 
 
 
 module.exports= mongoose.model("Data",DataSchema);