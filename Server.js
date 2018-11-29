const express =  require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const request = require('request')
const path = require('path')


require('dotenv').config();


require('./db/db');

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const corsOptions = {
	// environment variables VVVVVVVVV
    origin: process.env.REACT_APP_ADDRESS,
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

const skiPostController = require('./Controller/SkiPostController');
const loginController = require('./Controller/loginController');



app.use('/api/v1/skiapp', skiPostController);
app.use('/api/v1/auth', loginController);
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 9001

app.listen(port, () => {
    console.log('listening on port 9001')
})