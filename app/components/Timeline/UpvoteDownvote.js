"use client";
import React, { useState } from 'react';

const UpvoteDownvote = ({ postId, onVote }) => {
  const [votes, setVotes] = useState({ upvotes: 0, downvotes: 0 });

  const handleUpvote = async () => {
    try {
      setVotes((prevVotes) => ({ ...prevVotes, upvotes: prevVotes.upvotes + 1 }));
      onVote(postId, 'upvote');
    } catch (error) {
      console.error('Error upvoting:', error);
    }
  };

  const handleDownvote = async () => {
    try {
      setVotes((prevVotes) => ({ ...prevVotes, downvotes: prevVotes.downvotes + 1 }));
      onVote(postId, 'downvote');
    } catch (error) {
      console.error('Error downvoting:', error);
    }
  };

  return (
    <div className="flex items-center bg-yellow-500 text-black rounded-lg overflow-hidden shadow-md h-9 w-56">
      {/* Upvote section */}
      <button
        onClick={handleUpvote}
        className="flex items-center justify-center w-1/2 h-full p-2"
      >
        <span className="text-2xl font-bold mr-2">↑</span>
        <span className="text-sm font-semibold">Upvote</span>
        <span className="text-sm font-semibold ml-2">{votes.upvotes}</span>
      </button>

      <div className="border-l border-black h-full"></div>

      {/* Downvote section */}
      <button
        onClick={handleDownvote}
        className="flex items-center justify-center w-1/2 h-full p-2"
      >
        <span className="text-2xl font-bold">↓</span>
        <span className="text-sm font-semibold ml-2">{votes.downvotes}</span>
      </button>
    </div>
  );
};

export default UpvoteDownvote;