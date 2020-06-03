const express = require('express'); //1

connectDB = require('./config/db'); //2
// connecting mongo Database
connectDB(); //2

const app = express(); //1

// Init Middleware for body parser,  allow to get data in req.body
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('App Running Sending data...')); //res.send  //1

//3
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profiles', require('./routes/api/profiles'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/post', require('./routes/api/post'));

const PORT = process.env.PORT | 3000; //1

app.listen(PORT, () => console.log('Server connected on port : ' + PORT)); //1