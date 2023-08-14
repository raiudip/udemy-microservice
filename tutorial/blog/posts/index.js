const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const { randomBytes } = require("crypto");


const app = express();
app.use(cors());
app.use(bodyParser.json());

const posts = {};

// View all posts
app.get("/posts", (req, res) => {
  res.send(posts);
});

// Create a post
app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = { id, title };

  // Right after we add a new post to the collection
  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: { id, title },
  });

  res.status(201).send(posts[id]);
});

<<<<<<< HEAD
app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type);

  res.send({});
})
=======
app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);

  res.send({});
});
>>>>>>> origin/udip

// Server
app.listen(4000, () => {
  console.log("listening on 4000");
});
