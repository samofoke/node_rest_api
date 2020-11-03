const Prod = require('../model/prod.model')

async function getProd(req, res) {
    try {
        const prod = await Prod.find()

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(prod)) //we get it as a string
    }catch (err) {
        console.log(err)
    }
}

module.exports = {
    getProd
}