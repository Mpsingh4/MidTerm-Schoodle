CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title TEXT,
  description TEXT
);

CREATE TABLE proposals (
  id SERIAL PRIMARY KEY,
  event_id INTEGER REFERENCES events(id),
  title TEXT,
  description TEXT
);

CREATE TABLE attendees (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT
);

CREATE TABLE responses (
  id SERIAL PRIMARY KEY,
  proposal_id INTEGER REFERENCES proposals(id),
  attendee_id INTEGER REFERENCES attendees(id),
  availability BOOLEAN
);
