const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content, status: "pending" });

  commentsByPostId[req.params.id] = comments;

<<<<<<< HEAD
  await axios.post("http://event-bus-srv:4005/events", {
=======
<<<<<<< HEAD
  await axios.post("http://localhost:4005/events", {
>>>>>>> main
    type: "CommentCreated",
=======
  await axios.post('http://event-bus-srv:4005/events', {
    type: 'CommentCreated',
>>>>>>> sanushnew
    data: {
      id: commentId,
      content,
      postId: req.params.id,
      status: "pending",
    },
  });

  res.status(201).send(comments);
});

app.post("/events", async (req, res) => {
  console.log("Event Received:", req.body.type);

  const { type, data } = req.body;

  if (type === "CommentModerated") {
    const { postId, id, status, content } = data;
    const comments = commentsByPostId[postId];

    const comment = comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;
<<<<<<< HEAD

    await axios.post("http://event-bus-srv:4005/events", {
      type: "CommentUpdated",
=======
    await axios.post('http://event-bus-srv:4005/events', {
      type: 'CommentUpdated',
>>>>>>> sanushnew
      data: {
        id,
        status,
        postId,
        content,
      },
    });
  }

  res.send({});
});

app.listen(4001, () => {
  console.log("Listening on 4001");
});
