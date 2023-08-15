// eslint-disable-next-line react/prop-types
const CommentList = ({ comments }) => {
  const renderedComments = Object.values(comments)?.map((comment, idx) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "This comment is awaiting moderation.";
    }

    if (comment.status === "rejected") {
      content = "This comment has been rejected.";
    }

    return <li key={`${idx}. ${comment.id}`}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
