const express      = require('express');
const app          = express();
const router       = express.Router();

const checkURL = (req, res, next) => {
    console.log('You are viewing: '+req.originalUrl);
    next();
}

router.get('/', (req, res) => {
    res.send('<h1>Hello from Home page</h1>');
});

router.get('/about', checkURL, (req, res) => { // Here we are calling on specific router (URL)
    res.send('<h1>Hello from About page</h1>');
});

router.get('/contact', (req, res) => {
    res.send('<h1>Hello from Contact page</h1>');
});

router.get('/portfolio', (req, res) => {
    res.send('<h1>Hello from Portfolio page</h1>');
});

app.use('/', router); //Middleware for specific url (Here / means it will call all url where middleware funtion are calling)

app.listen(5000, () => {
    console.log('listeing the port 5000');
});