

// server.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
//const PORT = 3000;
const port = process.env.PORT || 3000;

// Sample data
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Get all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Create a new item
app.post('/api/items', (req, res) => {
  const { name } = req.body;
  const id = items.length + 1;
  const newItem = { id, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Other API routes (GET by ID, PUT, DELETE) here...

// Serve the index.html file for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/*app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
});
