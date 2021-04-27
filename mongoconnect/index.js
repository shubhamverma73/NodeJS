const express   = require('express');
const app       = express();
const mongoose  = require('mongoose');
const Users     = require('./users');

mongoose.connect('mongodb+srv://root:byPunefV3K6edkGY@cluster0.zpg0t.mongodb.net/mongoDB?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}).then(() => {
    console.log('connected to database.');
}).catch(err => {
    console.log('Error'+err);
});

const port      = process.env.PORT || 3000;

// =================================== Methods use by our system (Middleware) ===========================================
app.use(express.json());

// ================================ Get data of all Users ===============================
app.get('/users', async (req, res) => {
    try {
        const result = await Users.find();
        res.send(result);
    }
    catch(err) {
        res.send('Records not found, try again.'+ err);
    }
});

app.post('/user', async (req, res) => {
    try {

        const register = new Users({
            name:       'Vishwash',
            email:      'vishwash@gmail.com',
            phone:      9839879986,
            address:    'Chappra',
            date:       Date.now()
        });
        const result    = await register.save();
        res.status(201).send('user created successfully');
    }
    catch(err) {
        res.send('user not created, try again.'+ err);
    }
});

Users.find({}, function(err, users) {
    try {
        if(err) {
            console.log('Getting error during fetching data from table '+err);
        } else {
            console.log(users);
        }
    }
    catch {
        console.log('Something went wrong '+err);
    }
});

app.listen(port, () => {
    console.log('connected to server');
});