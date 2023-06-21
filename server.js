// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');
const { Pool } = require('pg');

const PORT = process.env.PORT || 8080;
const app = express();
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const sqlite3 = require('sqlite3').verbose();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const {generateUniqueURL} = require('./helpers');

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const eventRoutes = require('./routes/events');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
// app.use('/events', eventRoutes); -----xx---
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  res.render('index');
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

app.get('/create-event', (req, res) => {
  res.render('create-event');
});

app.post('/create-event', (req, res) => {
  const { eventTitle, eventDescription, organizerName, organizerEmail, eventDate } = req.body;
  const uniqueURL = generateUniqueURL(5);
  // Store the event details in a database
  // For simplicity loging the event data here
  console.log('Event Data:', {
    eventTitle,
    eventDescription,
    organizerName,
    organizerEmail,
    eventDate,
    uniqueURL,
  });

  res.send({ uniqueURL });
});

app.get('/eventURL/:id', (req, res) => {
  const eventId = req.params.id;
  const event = {
    eventTitle: 'Sample Event Title',
    eventDescription: 'Sample Event Description',
    organizerName: 'Sample Organizer Name',
    organizerEmail: 'sample@example.com',
    eventDate: '2023-06-15',
    uniqueURL: eventId,
  };

  res.render('eventURL', { event });
});


