// server.js
const express = require('express');

// Define Express App
const app = express();
const PORT = process.env.PORT || 3030;

// Serve Static Assets
app.use(express.static('images'));

app.listen(PORT, () => {
    console.log('Server connected at:', PORT);
});