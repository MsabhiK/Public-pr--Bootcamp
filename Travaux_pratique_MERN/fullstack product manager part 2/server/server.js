const express = require("express");
const app = express();
const cors = require('cors');  //this is new
require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.json(), express.urlencoded({ extended: true }));

app.use(cors()); // this is new
const AllProductsRoutes = require("./routes/product.routes");
AllProductsRoutes(app);

require("./config/mongoose.config");









app.listen( PORT, () => { 
    console.log('The port '+ PORT + ' is ready®️')
})
