const { request, response } = require("express");

module.exports.index = (request, response) => {
    response.json({
        message: "Testing 1..2...3....!"
    });
}