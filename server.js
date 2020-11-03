const http = require('http')

//creating a method that create a request and response
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Yype', 'text/html')
    res.write('<h1>I am alive server</h1>')
    console.log("I am connected...!!!!")
    res.end()
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))