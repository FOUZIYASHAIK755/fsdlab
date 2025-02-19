const express = require('express');
const app = express();

// Route for the home page
app.get('/home', (req, res) => {
    res.status(200).send('<h1>Home Page</h1><p>This is home page</p>');
});

// Route for the about page
app.get('/about', (req, res) => {
    res.status(200).send('<h1>About Page</h1><p>This is about page</p>');
});

// Route for the contact page
app.get('/contact', (req, res) => {
    res.status(200).send('<h1>Contact Us Page</h1><p>This is contact us page</p>');
});

// Route for the /api/data endpoint with a JSON response
app.get('/api/data', (req, res) => {
    const data = {
        name: "John Doe",
        age: 30,
        city: "New York"
    };

    // Send JSON response
    res.status(200).json(data);
});

// Handle 404 for unknown routes
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1><p>Page not found</p>');
});

// Start the server on port 3000
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
