const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // Port you want to run the server on

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Send HTML file to browser
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
