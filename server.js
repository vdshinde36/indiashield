



  const express = require("express");
  const mongoose = require("mongoose");
  const cors = require('cors');
  const bodyParser = require("body-parser");
  const cookieParser=require('cookie-parser');
  const config = require('./Config/config');
  const multer = require('multer');
  const DataRoute = require('./Routes/DataRoutes')

  
  
  

  
  
  // app
  const app = express();
  
  // db
  mongoose
      .connect(config.MONGO_URI, {
          useNewUrlParser: true,
          useCreateIndex:true,
          useFindAndModify:false,
          useUnifiedTopology: true
      })
      .then(() => console.log(`[DB][DB Connected.........]`))
      .catch(err => { console.log('[DB] [DB error]')});
  
  
  // middlewares 
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser()); 
  
  
  
  // routes
  app.use('/api', DataRoute);
  
  
  
  
  
  
  const port = config.PORT || 7000;
  
  console.log(`[process.env][${process.env.toString()}]`);
    
  app.listen(port, () => console.log(`[Server][Server running on port ${port}]`));