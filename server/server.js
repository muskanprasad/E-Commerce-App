require('dotenv').config(); // This must remain the first line
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Basic route for testing
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));