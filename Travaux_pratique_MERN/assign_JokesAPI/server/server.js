const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokeRoutes = require("./routes/joke.routes");
AllMyJokeRoutes(app);





app.listen( PORT, () => { 
    console.log('The port '+ PORT + ' is ready®️')
})
