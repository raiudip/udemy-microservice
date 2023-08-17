// eslint-disable-next-line react/prop-types
const CommentList = ({ comments }) => {
<<<<<<< HEAD
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
=======
  const renderedComments = Object.values(comments)?.map((comment) => {
    let content;
    if(comment.status === 'approved'){
      content = comment.content;
    }
    if(comment.status === 'pending'){
      content = 'This comment is awaiting moderation.';
    }
    if(comment.status === 'rejected'){
      content = 'This comment is rejectd.';
    }
    return <li key={comment.id}>{content}</li>;
>>>>>>> sanushnew
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
