// Client facing scripts here

// not working scripts yet just the idea, need a lot more work to actually function


// document.getElementById('event-form').addEventListener('submit', function(event) {
//   event.preventDefault();

//   // Get form values
//   var eventTitle = document.getElementById('event-title').value;
//   var eventDescription = document.getElementById('event-description').value;
//   var organizerName = document.getElementById('organizer-name').value;
//   var organizerEmail = document.getElementById('organizer-email').value;

//   // Create an event object
//   var event = {
//     title: eventTitle,
//     description: eventDescription,
//     organizer: {
//       name: organizerName,
//       email: organizerEmail
//     }
//   };

//   // Do something with the event object (e.g., send it to the server)
//   console.log(event);
// });


// Generate a random alphanumeric string
function generateUniqueURL(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

