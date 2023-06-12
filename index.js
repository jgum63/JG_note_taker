const express = require('express');
const path = require('path');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET request for reviews
app.get('/api/notes', (req, res) => {
  res.status(200).json();
});

app.post('/api/notes', (req, res) => {
  console.info(`${req.method} request received to add a review`);

  // Prepare a response object to send back to the client
  let response;

  // Check if there is anything in the response body
  if (req.body && req.body.product) {
    response = {
      status: 'success',
      data: req.body,
    };
    res.status(200).json(response);
  } else {
    res.status(400).json('Request body must at least contain a product name');
  }

  // Log the response body to the console
  console.log(req.body);
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
