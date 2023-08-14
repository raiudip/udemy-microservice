import { useState, useEffect, useRef } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const didMountRef = useRef(false);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      const fetchPosts = async () => {
        const res = await axios.get("http://localhost:4002/posts");
        setPosts(res.data);
      };
      fetchPosts();
    }
  }, [posts]);

  const renderedPosts = Object.values(posts)?.map((post) => {
    return (
      <div
        className="card"
        style={{ width: "40%", marginBottom: "20px" }}
        key={post.id}
      >
        <div
          className="card-body"
          style={{ width: "60%", marginBottom: "20px" }}
        >
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
