import React, { useState } from 'react';

const CommentForm = ({ postId, onComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting comment:", comment); // Log comment before submitting
    if (comment.trim()) {
      onComment(postId, comment); // Call onComment with the postId and comment
      setComment(''); // Clear the comment input
    } else {
      console.error("Comment cannot be empty");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        className="w-full p-2 border rounded"
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






