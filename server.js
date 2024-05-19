const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Here you would typically authenticate the user and perform necessary operations
    console.log('Received login request:', { username, password });
    res.send('Login successful');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
