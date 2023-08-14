// eslint-disable-next-line react/prop-types
const CommentList = ({ comments }) => {
  const renderedComments = Object.values(comments)?.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
