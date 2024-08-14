"use client";
import React from 'react';

const Comment = ({ postId, comments }) => {
  return (
    <div className="comments-list">
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p>{comment.attributes.Content}</p>
        </div>
      ))}
    </div>
  );
};

export default Comment;
