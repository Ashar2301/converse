const express = require('express');
const cors = require('cors');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = 3000;

//app.use(cors());
// /app.listen(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );

// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});