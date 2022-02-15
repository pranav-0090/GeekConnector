const express = require('express');

const app = express();

const http = require('http');
const server = http.createServer((req, res)=>{
   console.log(req.url, req.method, req. headers);
   res.write('<html>');
   res.write('<head> <title> Hello TutorialsPoint </title> </head>');
   res.write(' <body> Hello Tutorials Point </body>');
   res.write('</html>');
   //write end to mark it as stop for node js response.
   res.end();
});

app.get('/', (req, res) => res.send('App Running Sending data...')); //res.send

const PORT = process.env.PORT | 3000

app.listen(PORT, () => console.log('Server connected on port : ${PORT}'));
