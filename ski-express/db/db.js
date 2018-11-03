const mongoose = require('mongoose');

mongoose.connect('mongoose://localhost/skiProject');

mongoose.connection.on('connected', () => {
    console.log('Houston we have connection')
});

mongoose.connection.on('disconnected', () => {
    console.log("We've lost the connection!!!!")
})