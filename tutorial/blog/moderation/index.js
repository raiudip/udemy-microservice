const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    console.log("data.content", data.content);

    const status = data.content.includes("orange") ? "rejected" : "approved";

    console.log("Current status", status);

    await axios.post("http://localhost:4005/events", {
      type: "CommentModerated",
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content,
      },
    });
  }

  res.send({});
});

app.listen(4003, () => {
  console.log("Listening on 4003");
});
