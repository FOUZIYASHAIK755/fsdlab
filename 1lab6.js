const http = require('http')
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    if (req.url == '/home') {
        res.statusCode = 200
        res.end('<h1>Home Page</h1><p>This is home page</p>')
    }
    else if (req.url == '/about') {
        res.statusCode = 200
        res.end('<h1>About Page</h1><p>This is about page</p>')
    }
    else if (req.url == '/contactus') {
        res.statusCode = 200
        res.end('<h1>Contact Us Page</h1><p>This is contact us page</p>')
    }
    else {
        res.statusCode = 404
        res.end('<h1>404 Not Found</h1><p>Page not found</p>')
    }
})
server.listen(4000, () => {
    console.log('Server is running on port 4000')
})