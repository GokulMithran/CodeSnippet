// // app.js

const express = require('express');
const app = express();
const router = require('./routes');

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/', router);
app.use(express.static(__dirname + '/public'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

