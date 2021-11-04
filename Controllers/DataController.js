
const Data = require('../models/data.schema');
const XLSX = require('xlsx');
const maptoSchema = require('../readxlsx')

class DataController{

    constructor() {}


    static async uploadFile (req, res, next) {
        // get buffer from multer
         console.log(req.file)
          try {
              let result = await DataController.uploadExcelFile(req.file.buffer);
              if(result)
              return res.json({status:true})
              return res.json({status:false});

          }catch(err){
              console.log(err);
              return res.json({status:false,err:err});
          }
    }


    static async uploadExcelFile (buffer) {
        var wb = XLSX.read(buffer, {type:'buffer',cellDates:true});
        let jso = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        let data = maptoSchema(jso);
        try {
            let result = await Data.insertMany(data);
            return true;
        }catch(err){
            console.log(err);
            return false;
        }
        
    }
}

module.exports = DataController;
