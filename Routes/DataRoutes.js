const express = require("express");
const multer = require("multer");
const router=express.Router();

const upload = multer();



const DataController  = require('../Controllers/DataController');

const filevalidator = function (req, res , next) {
    
}

router.post('/data/upload', upload.single('exelfile') , DataController.uploadFile);


module.exports = router;

