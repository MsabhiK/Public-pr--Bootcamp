const { Author } = require('../models/author.model');

//? READ ALL Authors
module.exports.findAllAuthors = (req, res) => {
    Author.find() // [] 
        .then(AllAuthors => {
            console.log(`>>>>> Author.find() ==> ${AllAuthors}`)
            res.json(AllAuthors)
        })
        .catch((err) => {
            res.json(err)
        })
}

    //CREATE  The method below is new
module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({ name })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
        
}

//? UPDATE Author

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updateAuthor => {
            res.json(updateAuthor);
        })
        .catch((err) => {
            res.json(err);
        });
}

//? Delete One Author
module.exports.FindAndDelete = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json(err)
        })
}


//? READ One Author
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id }) // [] 
        .then(OneAuthor => {
            console.log(`>>>>> Author.findOne() ==> ${OneAuthor}`)
            res.json(OneAuthor)
        })
        .catch((err) => {
            res.json(err)
        })
}





