var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;
  mongoose.connect(URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
 }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
 })