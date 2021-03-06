const Prod = require('../model/prod.model')

async function getProd(req, res) {
    try {
        const prod = await Prod.findProd()

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(prod)) //we get it as a string
    }catch (err) {
        console.log(err)
    }
}


//it takes the id of products
async function getOne(req, res, id) {
    try {
        const prods = await Prod.findById(id)

        if(!prods) {
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({mesage: 'Route Not Found selected product.'}))
        }else {
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(prods)) //we get it as a string
        }
    }catch (err) {
        console.log(err)
    }
}

module.exports = {
    getProd,
    getOne
}