const http = require('http')
const exp = require('express')
const app = exp()
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/sample.html')
})
const server = http.createServer(app)
server.listen(4000, () => {
    console.log('server is running on port 4000')
})
