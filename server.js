const express = require('express')
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var cors = require('cors');
const app = express();
const port = 5000;

const corsOpts = {
    origin: '*'
  };
  
app.use(cors(corsOpts));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api', require('./routes/index'))


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

