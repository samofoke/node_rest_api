const http = require('http')
const { getProd, getOne } = require('./contorller/prod.control')

//creating a method that create a request and response
const server = http.createServer((req, res) => {
    //we check for the url path as well as post request
    if (req.url === '/products' && req.method === 'GET') {
        getProd(req, res)
    } else if (req.url.match(/\/products\/([0-9]+)/) && req.method === 'GET') {
        
        const id = req.url.split('/')[3]
        getOne(req, res, id)
        
    }
    else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({mesage: 'Route Not Found.'}))
    }  
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))