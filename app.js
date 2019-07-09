const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

morgan(':method :url :status :res[content-length] - :response-time ms')

app.set('view engine', 'ejs');
app.set('views', './views');
 

app.use(express.static(__dirname + '/public'));
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
     res.render('index');
});


app.listen(8000, () => {
    console.log('App listening on port 3000!');
});