// routes.js

const express = require('express');
const router = express.Router();
const CodeSnippet = require('./models/CodeSnippet');

// Page 1: Form to submit code snippets
router.get('/', (req, res) => {
  res.render('form');
});

// Page 2: Display submitted entries
router.get('/entries', async (req, res) => {
  try {
    const entries = await CodeSnippet.findAll();
    res.render('entries', { entries });
  } catch (error) {
    console.error('Error fetching entries:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Handle form submission
router.post('/submit', async (req, res) => {
  try {
    // Extract data from request body
    const { username, language, stdin, source } = req.body;
  
    // Save the data to database
    await CodeSnippet.create({ username, language, stdin, source });
  
    // Redirect to Page 2 after submission
    res.redirect('/entries');
  } catch (error) {
    console.error('Error submitting code snippet:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
