// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// In-memory data (replace this with a database in a real-world scenario)
const restaurants = [
  {
    id: 1,
    name: 'KFC',
    deals: ['20% off on weekdays', 'Free dessert with any main course'],
    pictures: ['KFC.jpg', 'img2.jpg']
  },
  {
    id: 2,
    name: 'Mcdonalds',
    deals: ['Buy one get one free on pizzas', 'Happy hour 4-6 PM'],
    pictures: ['img3.jpg', 'img4.jpg']
  },
  // Add more restaurants as needed
];

// Get all restaurants
app.get('/api/restaurants', (req, res) => {
  res.json(restaurants);
});

// Get a specific restaurant by ID
app.get('/api/restaurants/:id', (req, res) => {
  const restaurantId = parseInt(req.params.id);
  const restaurant = restaurants.find(r => r.id === restaurantId);

  if (!restaurant) {
    return res.status(404).json({ error: 'Restaurant not found' });
  }

  res.json(restaurant);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
