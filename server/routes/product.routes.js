const { get } = require("mongoose");
const ProductController = require("../controller/product.controller");

module.exports = (app) => {
    app.post("/api/products/new", ProductController.createProduct);
    app.get("/api/products", ProductController.allProducts);
    app.get("/api/products/:id", ProductController.oneProduct);
    app.get("/api", ProductController.index);
}
