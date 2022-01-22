
const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json()); //parses json data into javascript properties

app.use('/campsites', campsiteRouter); //mounts the router on the /campsites path 
app.use('/promotions', promotionRouter); //mounts the router on the /promotions path 
app.use('/partners', partnerRouter); //mounts the router on the /partners path


// the underscore notation indicates using an absolute path
app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});