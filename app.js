const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();
const PORT = 3000;

// Get MongoDB URI and database name from environment variables
const mongoUri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME;

// Function to connect to MongoDB
const connectToMongo = async () => {
  try {
    const client = await MongoClient.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
    return client;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);  // Exit if MongoDB connection fails
  }
};

// Connect to MongoDB and query data
connectToMongo().then(client => {
  const db = client.db(dbName);
  const collection = db.collection('test');

  // Route to fetch data from MongoDB
  app.get('/', async (req, res) => {
    try {
      const results = await collection.find().toArray();  // Query MongoDB collection
      if (results.length === 0) {
        res.status(404).send("No data found in MongoDB.");
      } else {
        res.json(results);  // Send the data from MongoDB as JSON response
      }
    } catch (error) {
      console.error("Error fetching data from MongoDB:", error);
      res.status(500).send("Error fetching data");
    }
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
