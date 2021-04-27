const EventEmitter = require('events');

const event = new EventEmitter();

event.on('sayMyName', () => {
    console.log('My name is Shubham.');
});

event.on('sayMyName', () => {
    console.log('My address is Uttam Nagar, New Delhi.');
});

event.on('sayMyName', (status, msg) => {
    console.log(`status code is ${status} and message is ${msg}`);
});

event.emit('sayMyName', 200, 'ok');