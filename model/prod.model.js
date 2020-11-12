const prod = require('../data/products.json')

function findProd() {
    return new Promise((resolve, reject) => {
        resolve(prod)
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const ps = prod.find((p) => p.id === id)
        resolve(ps)
    })
}

module.exports = {
    findProd,
    findById
}