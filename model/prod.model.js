const prod = require('../data/products.json')

function find() {
    return new Promise((resolve, reject) => {
        resolve(prod)
    })
}

module.exports = {
    find
}