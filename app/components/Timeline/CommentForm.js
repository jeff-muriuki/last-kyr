import React, { useState } from 'react';

const CommentForm = ({ postId, onComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onComment(postId, { text: commentText });
      setCommentText(""); // Clear the input field after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
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



