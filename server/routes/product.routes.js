const { get } = require("mongoose");
const ProductController = require("../controller/product.controller");

module.exports = (app) => {
    app.get("/api", ProductController.index);
    app.get("/api/products", ProductController.allProducts);
    app.post("/api/products/new", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.oneProduct);
    app.put("/api/products/:id", ProductController.UpdateProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);
}
