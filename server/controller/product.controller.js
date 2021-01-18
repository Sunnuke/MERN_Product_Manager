const { Product } = require("../models/product.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Connected!"
    });
}

module.exports.ProductNew = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(response => response.json(person))
        .catch(err => response.json(err));
}