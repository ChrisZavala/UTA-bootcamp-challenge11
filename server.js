const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
//need variables for our routes
const htmlRoutes = require('./routes/html');
const apiRoutes = require('./routes/api');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//routes we are going to use based on variable above. 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//love the rocket!
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);