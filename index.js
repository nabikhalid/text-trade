const express = require('express');
const app = express();
const path = require('path');
// var List = require("collections/list");

app.use(express.json());

// app.get();
// app.post();
// app.put();
// app.delete();

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

// var allText = new List();

var allText = [
    {id: 1, owner: 'NK', text: 'Introduction to Node JS: 5th Edition'}
];

var allUser = [
    {email: 'NK@gmail.com', password: 'password', username: 'NK', myText: []}
];

// let courses = [
//     {id: 1, name: 'math'}, 
//     {id: 2, name: 'english'}, 
//     {id: 3, name: 'physical activity'}
// ];

// '/' is the root of a website
// this is a route to root
app.get('/', (req, res) => {
    res.send('Hello, welcome to Text Trade.');
});

app.post('/register', (req, res) => {
    // input validation
    if(!req.body.email || !req.body.password || !req.body.username){
        res.status(400).send('One of your email, password, or username is missing.');
        return;
    }
    let username = allUser.find(u => u.username === req.params.username);
    if (!username) {
        let user = {
            email: req.body.email, 
            password: req.body.password, 
            // parse JSON
            username: req.body.username,
            myText: []
        };
    
        allUser.push(user);
        res.send(user);
    }
    res.status(400).send('Username is already taken.');
    return;
});

app.get('/allText', (req, res) => {
    res.send(allText);
});

app.get('/allText/:id', (req, res) => {
    // backend logic
    let text = allText.find(t => t.id === parseInt(req.params.id));
    // 404 not found
    if (!text) {
        res.status(404).send('The text with the given ID was not found.');
        return;
    }

    res.send(allText);
    return;
});

// can use const if course obj is not reset later
// can use let otherwise 

app.post('/allText', (req, res) => {

    // input validation
    if (!req.body.name || req.body.name.length < 3) {
        // 400 bad request
        res.status(400).send('Name is required and should be minimum 3 characters.');
        return;
    }

    let text = {
        id: allText.length + 1, 
        owner: '', 
        // parse JSON
        text: req.body.text
    };

    allText.push(text);
    res.send(text);
});

// put 
// finish this, update for text, not courses

app.put('/allText/:id', (req, res) => {
    // find the course, if doesn't exist, 404
    let text = allText.find(t => t.id === parseInt(req.params.id));
    // 404 not found
    if (!text) res.status(404).send('The text with the given ID was not found.');

    // bad request 400
    if (!req.body.id || req.body.text == null) {
        // 400 bad request
        res.status(400).send('Invalid text input.');
        return;
    }

    text.name = req.body.name;
    res.send(text);

});

app.delete('/allText/:id', (req, res) => {
    let text = allText.find(t => t.id === parseInt(req.params.id));
    if (!text) res.status(404).send('The text with the given ID was not found.');

    const index = allText.indexOf(text);
    allText.splice(index, 1);

    res.send(text);
});

// environment variable, if port 3000 is not available, for deployment
app.listen(3000, () => console.log('Listening on port 3000...'));