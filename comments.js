// Create a web server that listens on port 3000 and has the following routes:
// - GET /comments - returns a list of all comments
// - POST /comments - creates a new comment
// - GET /comments/:id - returns a single comment with the id matching the route parameter
// - PUT /comments/:id - updates a comment with the id matching the route parameter
// - DELETE /comments/:id - deletes a comment with the id matching the route parameter

let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let comments = [];
let nextId = 1;

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  let comment = req.body;
  comment.id = nextId++;
  comments.push(comment);
  res.status(201).json(comment);
});

app.get('/comments/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let comment = comments.find(c => c.id === id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ error: 'Comment not found' });
  }
});

app.put('/comments/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let comment = comments.find(c => c.id === id);
  if (comment) {
    comment.author = req.body.author;
    comment.text = req.body.text;
    res.json(comment);
  } else {
    res.status(404).json({ error: 'Comment not found' });
  }
});

app.delete('/comments/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let index = comments.findIndex(c => c.id === id);
  if (index !== -1) {
    comments.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Comment not found' });
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});