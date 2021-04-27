const express      = require('express');
const app          = express();

const checkURL = (req, res, next) => {
    console.log('You are viewing: '+req.originalUrl);
    next();
}
app.use(checkURL); //This is called Middleware

app.get('/', (req, res) => {
    res.send('<h1>Hello from Home page</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>Hello from About page</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Hello from Contact page</h1>');
});

app.get('/portfolio', (req, res) => {
    res.send('<h1>Hello from Portfolio page</h1>');
});

app.listen(5000, () => {
    console.log('listeing the port 5000');
});