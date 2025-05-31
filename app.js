const express = require('express');
const mongoose = require('mongoose');
const personController = require('./controllers/personController');
const connectDB = require('./mongooseSetup'); // contains connection logic and pulls string from.env file

// Load environment variables
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies (if you want to accept JSON input)
app.use(express.json());


// Example route: create a new person
app.post('/person', (req, res) => {
  const { name, age, favoriteFoods } = req.body;

  personController.createAndSavePerson((err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(data);
  });
});

// Example route: get people by name
app.get('/people/:name', (req, res) => {
  personController.findPeopleByName(req.params.name, (err, people) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(people);
  });
});

// Add more routes to expose other controller functions as needed

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
