require('dotenv').config({ path: './.env' }); 

console.log('Attempting to connect with MONGO_URI:', process.env.MONGO_URI);

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');//smooth rendering of frontend using backend 
const productRoutes = require('./routes/productRoutes');

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));