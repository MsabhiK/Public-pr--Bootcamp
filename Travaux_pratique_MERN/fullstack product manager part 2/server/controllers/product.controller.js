const { Product } = require('../models/product.model');
module.exports.index = (req, res) => {
    res.json({
       message: "Hello World"
    });
}

//? READ ALL Products
module.exports.findAllProducts = (req, res) => {
    Product.find() // [] 
        .then(AllProducts => {
            console.log(`>>>>> Product.find() ==> ${AllProducts}`)
            res.json(AllProducts)
        })
        .catch((err) => {
            res.json(err)
        })
}

//? READ One product
module.exports.findOneProduct = (req, res) => {
    Movie.findOne({ _id: req.params.id }) // [] 
        .then(OneProduct => {
            console.log(`>>>>> Movie.findOne() ==> ${OneProduct}`)
            res.json(OneProduct)
        })
        .catch((err) => {
            res.json(err)
        })
}

    //CREATE  The method below is new
module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
    
}

//? UPDATE PRoduct

module.exports.updateProduct = (req, res) => {
    Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updateProduct => {
            res.json(updateProduct);
        })
        .catch((err) => {
            res.json(err);
        });
}

//? Delete One Product
module.exports.FindAndDelete = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json(err)
        })
}


