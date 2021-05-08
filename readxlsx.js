const XLSX = require('xlsx');
const fs = require('fs')
const mongoose = require('mongoose')

const Data = require('./models/data.schema');





function maptoSchema (jso) {
    let result = [];
    jso.forEach(element => {

        let { Name: name, 
            'Contact Number': contact_number, 
            Address: address,
            Comments: comments,
            'Resource Details': resource_details,
            'Update Date' : updated_date,
            City: city,
            State: state,
            'Verification Status': verification,
            Source: source,
            Resource : resource
  
          } = element;

          result.push({name, contact_number, address, updated_date, comments, resource_details, resource, city, state, verification, source})
        });
    return result;



}

module.exports = maptoSchema;




        

    






