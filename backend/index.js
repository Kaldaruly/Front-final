const express = require('express')
const app = express();
const cors = require('cors');
const db = require('./db/db')

app.use(express());
app.use(cors())

// Connect database

db();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`listen on port ${PORT}`));