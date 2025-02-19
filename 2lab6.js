const exp = require('express')
const app = exp()
app.get('/greet', (req, res) => {
    var name = req.query.name
    res.setHeader("Context-Type", "Text/html")
    if (name) {
        res.write("<h1>Hello " + name + "</h1>")
    }
    else {
        res.write("<h1>Hello Stranger</h1>")
    }
})
app.listen(4001, () => {
    console.log('Server is running on port 4000')
})