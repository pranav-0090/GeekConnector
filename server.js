const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('App Running Sending data...')); //res.send

const PORT = process.env.PORT | 3000

app.listen(PORT, () => console.log('Server connected on port : ${PORT}'));