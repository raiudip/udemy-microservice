import { useState, useEffect, useRef } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const CommentList = ({ postId }) => {
  const didMountRef = useRef(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      const fetchData = async () => {
        const res = await axios.get(
          `http://localhost:4001/posts/${postId}/comments`
        );
        setComments(res.data);
      };
      fetchData();
    }
  }, [postId]);

  const renderedComments = Object.values(comments)?.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
