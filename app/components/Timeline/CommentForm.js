"use client";
import React, { useState } from 'react';

const CommentForm = ({ postId, onComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.trim() === "") return;

    onComment(postId, { text: comment });
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form mt-4">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;