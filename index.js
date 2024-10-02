/**
 * @file index.js
 * @description Express server with utility functions
 */

const express = require('express');
const app = express();

/**
 * Express route for the root path
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/', (req, res) => {
  res.send('Hello App Runner. Managed Container Service');
});

/**
 * Express route for generating a random number
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/random/:max', (req, res) => {
  const max = parseInt(req.params.max);
  if (isNaN(max)) {
    res.status(400).json({ error: 'Invalid max value' });
  } else {
    const result = getRandomInt(max);
    res.json({ random: result });
  }
});

/**
 * Express route for calculating the square of a number
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/square/:number', (req, res) => {
  const number = parseInt(req.params.number);
  if (isNaN(number)) {
    res.status(400).json({ error: 'Invalid number' });
  } else {
    const result = square(number);
    res.json({ square: result });
  }
});

/**
 * Start the Express server
 */
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

/**
 * Generates a random integer between 0 and max-1
 * @param {number} max - The upper bound (exclusive) for the random number
 * @returns {number} A random integer between 0 and max-1
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
 * Calculates the square of a number
 * @param {number} n - The number to square
 * @returns {number} The square of the input number
 */
function square(n) {
  return n * n;
}