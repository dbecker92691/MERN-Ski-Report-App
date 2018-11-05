const express =  require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');


require('./db/db');


app.use(session({
    secret: "I've got something in my front pocket for you",
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

const skiPostController = require('./Controller/SkiPostController');
const loginController = require('./Controller/loginController');



app.use('/api/v1/skiapp', skiPostController);
app.use('/auth', loginController);


app.listen(process.env.PORT || 9001, () => {
    console.log('listening on port 9001')
})