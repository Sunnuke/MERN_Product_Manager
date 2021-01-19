const { Product } = require("../models/product.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Connected!"
    });
}

module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.allProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err));
}
module.exports.oneProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.UpdateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
        .then(updated => response.json(updated))
        .catch(err => response.json(err));
}

module.exports.deleteProduct = (request, response) => {
    Product.findOneAndDelete({_id: request.params.id})
        .then(deleted => response.json(deleted))
        .catch(err => response.json(err));
}