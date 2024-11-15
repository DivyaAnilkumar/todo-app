const express = require('express');
const todolistRoutes = require('./routes/todolistRoutes');
const cors = require('cors');
const app = express();
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended:'true'}));
require('dotenv').config();

PORT = process.env.PORT 

app.use('/',todolistRoutes);



require('./db/connection')


app.listen(PORT,()=>{
    console.log('Server running on PORT 5000');
})