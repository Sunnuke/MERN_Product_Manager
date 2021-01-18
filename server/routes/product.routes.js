const { get } = require("mongoose");
const ProductController = require("../controller/product.controller");

module.exports = (app) => {
    app.get("/api", ProductController.index);
}
