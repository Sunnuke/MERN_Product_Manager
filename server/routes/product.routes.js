const { get } = require("mongoose");
const ProductController = require("../controller/product.controller");

module.exports = (app) => {
    app.get("/api", ProductController.index);
    app.post("/api/products/new", ProductController.ProductNew);
}
