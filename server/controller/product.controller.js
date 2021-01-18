const { request, response } = require("express");

module.exports.index = (request, response) => {
    response.json({
        message: "Connected!"
    });
}