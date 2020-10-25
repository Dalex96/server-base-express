const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const env = require('node-env-file'); // .env file

const { mongoose } = require('./db')

const app = express();

//settings
env(__dirname + '/.env');
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use(cors())
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

//Routes
app.use('/api/v1/', require('./routes/index'));

//Static files


//Starting the server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`);
})