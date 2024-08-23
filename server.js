const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/save', (req, res) => {
    const todo = req.body.todo;
    fs.appendFile('todos.txt', `${todo}\n`, err => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).json({ status: 'error' });
        } else {
            res.json({ status: 'success' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
