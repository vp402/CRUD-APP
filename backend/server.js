const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());  

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// MongoDB connection setup
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit with failure code
  }
};

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes); // User routes for authentication and profile
app.use('/api/products', productRoutes); // Product routes for the eCommerce features

// Default route for testing the server
app.get('/', (req, res) => {
  res.send('Welcome to the eCommerce API');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

