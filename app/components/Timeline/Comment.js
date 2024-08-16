import React from 'react';

const Comment = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return <p>No comments yet.</p>;
  }

  return (
    <div className="comments-list">
      {comments.map((comment) => (
        <div key={comment.id} className="comment p-2 mb-2 border-b">
          <p>{comment.attributes.Content}</p>
        </div>
      ))}
    </div>
  );
};

export default Comment;


