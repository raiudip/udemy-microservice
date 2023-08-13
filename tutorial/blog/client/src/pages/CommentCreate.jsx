import { useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // content.length
    //   ?
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    // : alert("Comment cant be empty!");

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
