const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { randomBytes } = require("crypto");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const commentsByPostId = {};

// View all comments
app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id]) || [];
});

// Create a comment
app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content, status:'pending' });

  commentsByPostId[req.params.id] = comments;

  await axios.post('http://localhost:4005/events', {
    type: 'CommentCreated',
    data: {
      id: commentId,
      content,
      postId: req.params.id, 
      status:'pending'
    }
  });

  res.status(201).send(comments);
});

app.post('/events', (req, res) => {
  console.log('Event Recevied', req.body.type);
  const{type, data}= req.body;
  if(type=='CommentModerated'){
    const{postId, id, status}= data;

    const post = posts[postId];
    post.comments.push({id, content, status});
  }

  if(type=="CommentUpdate"){
    const{id, content, postId, status} = req.body;
    const post = post[postId];
    const comment = post.comments.find(comment =>{
      return comment.id ==id;
    })
    comment.status = status
    comment.content = content
  }

  res.send({});
})

// Server
app.listen(4001, () => {
  console.log("listening on 4001");
});
