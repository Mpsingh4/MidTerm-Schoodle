/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 *
 *     GET '/' - Homepage
    GET '/participant/:participantId/dashboard' - Participant Dashboard
    GET '/event/:eventId/invitation' - Event Invitation
    POST '/event/:eventId/respond' - Participant Response
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});




// app.get('/event/:eventId', (req, res) => {

//   const eventId = req.params.eventId;

//   // Fetch details from database based on event ID

//   // Render details view with fetched data

//   res.render('event-details', { event });

// });



// app.get('/event/:eventId/respond', (req, res) => {

//   const eventId = req.params.eventId;

//   // Render response form view event details

//   res.render('response-form', { event });

// });



// app.get('/event/:eventId/edit', (req, res) => {

//   const eventId = req.params.eventId;

//   // Get event details

//   // Render event editing form

//   res.render('edit-event', { event });

// });



// app.get('/event/:eventId/invitation', (req, res) => {

//   const eventId = req.params.eventId;

//   // Render event details based on event ID and invitation

//   res.render('event-invitation', { event });

// });



// app.get('/participant/:participantId/dashboard', (req, res) => {

//   const participantId = req.params.participantId;

//   // For participant's viewing of their events and responses on a dashboard

//   res.render('participant-dashboard', { participant, events, responses });

// });


// // ------------------------------------------ POST ------------------------------------------


// app.post('/event/:eventId/respond', (req, res) => {

//   const eventId = req.params.eventId;

//   const { participantName, participantEmail, availability } = req.body;

//   // Process form data, save participant response into database

//   // Redirect 2 event details page

//   res.redirect('/event/:eventId'); // eventually replace with the actual event ID again

// });



// app.post('/event/:eventId/edit', (req, res) => {

//   const eventId = req.params.eventId;

//   // Process edits and update event details + add to database

//   // Redirect back 2 event details

//   res.redirect('/event/:eventId'); // Will replace eventId with the actual event ID

// });

// app.post('/participant/:participantId/dashboard', (req, res) => {

//   const participantId = req.params.participantId;

//   // For participant's viewing of their events and responses on a dashboard

//   res.render('participant-dashboard', { participant, events, responses });

// });



module.exports = router;
