const mongoose = require('mongoose');

// food is the name of our database
// that is automatically created
mongoose.connect('mongodb://localhost/skiProject');

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected')
});

mongoose.connection.on('error', (err) => {
  console.log(err, ' mongoose failed to connect')
});

mongoose.connection.on('disconncted', () => {
  console.log('Mongoose is disconnected')
});
