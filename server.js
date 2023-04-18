const express = require('express');
const PORT = 3000
const app = express();

// Home page
app.get('/', (req, res) => {
  res.send(`
    <h1>99 Bottles of beer on the wall</h1>
    <a href="/98">Take one down, pass it around</a>
  `);
});

// Number of bottles page
app.get('/:number_of_bottles', (req, res) => {
  const numberOfBottles = parseInt(req.params.number_of_bottles);
  const nextBottles = numberOfBottles - 1;

  let html = `<h1>${numberOfBottles} Bottles of beer on the wall</h1>`;

  if (numberOfBottles === 0) {
    html += '<p>No more bottles of beer on the wall!</p>';
  } else {
    html += `<a href="/${nextBottles}">Take one down, pass it around</a>`;
  }

  html += '<br><br><a href="/">Start over</a>';

  res.send(html);
});

// Start server
app.listen(3000, () => {
  console.log(`Server started on port: ${PORT} `);
});
