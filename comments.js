// Create web server
// 1. Import express
// 2. Create an instance of express
// 3. Define a route that listens for incoming requests
// 4. Define a callback function that will be invoked when the route is hit

// 1. Import express
const express = require('express');

// 2. Create an instance of express
const app = express();

// 3. Define a route that listens for incoming requests
app.get('/comments', (req, res) => {
  res.send('This is the comments route');
});

// 4. Define a callback function that will be invoked when the route is hit
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Run the server: node comments.js
// Open a browser and navigate to: http://localhost:3000/comments

// Create a new route that listens for incoming requests
app.get('/comments/new', (req, res) => {
  res.send('This is the new comments route');
});

// Create a new route that listens for incoming requests
app.get('/comments/:id', (req, res) => {
  res.send(`This is the comments route for id ${req.params.id}`);
});

// Run the server: node comments.js
// Open a browser and navigate to: http://localhost:3000/comments/1
// Open a browser and navigate to: http://localhost:3000/comments/2

// Create a new route that listens for incoming requests
app.get('/comments/:id/edit', (req, res) => {
  res.send(`This is the edit route for comment id ${req.params.id}`);
});

// Run the server: node comments.js
// Open a browser and navigate to: http://localhost:3000/comments/1/edit
// Open a browser and navigate to: http://localhost:3000/comments/2/edit

// Create a new route that listens for incoming requests
app.get('/comments/:id/delete', (req, res) => {
  res.send(`This is the delete route for comment id ${req.params.id}`);
});

// Run the server: node comments.js
// Open a browser and navigate to: http://localhost:3000/comments/1/delete
// Open a browser and navigate to: http://localhost:3000/comments/2/delete


