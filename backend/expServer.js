const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// Make sure to include the correct path to the 'contact' route
app.use('/api/contact', require('./routes/contact.js')); // Assuming your contact.js is in 'routes' folder

// You might also have other routes like /api/subject
app.use('/api/subject', require('./routes/subject.js'));

app.use('/api/subscribe', require('./routes/subscribe.js'));

app.use('/api/users', require('./routes/users.js'));

app.listen(PORT, () => {
    console.log('Server is running at http://localhost:' + PORT);
});
