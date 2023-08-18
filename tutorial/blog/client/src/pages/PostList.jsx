import { useState, useEffect, useRef } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const didMountRef = useRef(false);
  const [posts, setPosts] = useState({});

  console.log("Current Posts", posts);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      const fetchPosts = async () => {
        const res = await axios.get("http://posts.com/posts");
        console.log(res.data);
        setPosts(res.data);
      };
      fetchPosts();
    }
  }, [posts]);

  console.log("posts", posts)

  const renderedPosts = Object.values(posts)?.map((post) => {
    return (
      <div
        className="card"
        style={{ width: "40%", marginBottom: "20px" }}
        key={post.id}
      >
        <div
          className="card-body"
          style={{ width: "100%", marginBottom: "20px" }}
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
