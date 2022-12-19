const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const db = require('./db/db')

const authRegister = require('./user/register')
const authLogin = require('./user/login')

app.use(express());
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Connect database

db();

// Connect API

app.use('/api/register', authRegister);
app.use('/api/login', authLogin);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`listen on port ${PORT}`));
