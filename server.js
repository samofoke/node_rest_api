const http = require('http')
const prod = require('./data/products.json')

//creating a method that create a request and response
const server = http.createServer((req, res) => {
    if (req.url === '/products') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(prod)) //we get it as a string
    }else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({mesage: 'Route Not Found.'}))
    }  
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))