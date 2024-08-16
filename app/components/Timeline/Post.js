import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import UpvoteDownvote from './UpvoteDownvote';

const Post = ({ post, onVote, onToggleComments, showComments, onComment, comments = [] }) => {
  if (!post || !post.attributes) {
    return <div>Error: Post data is missing.</div>;
  }

  const { id, attributes } = post;
  const { Content, publishedAt, media, user } = attributes;

  const formattedTimestamp = `Published on ${new Date(publishedAt).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })}`;

  return (
    <div className="post mb-4 p-4 bg-white shadow-md rounded">
      <div className="post-header flex items-center">
        {/* Replace with dynamic user image and name */}
        <img
          src={user?.avatar || '/path-to-default-user-image.png'}
          alt={user?.username || 'User'}
          className="user-image w-10 h-10 rounded-full"
        />
        <div className="post-info ml-3">
          <p className="username font-bold">{user?.username || 'User Name'}</p>
          <p className="timestamp text-gray-500">{formattedTimestamp}</p>
        </div>
      </div>
      <div className="post-content mt-2">
        <p>{Content}</p>
        {media && (
          <div className="media-container mt-2">
            {media.type === 'video' ? (
              <video controls className="w-full mt-2">
                <source src={media.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={media.url} alt="Media" className="w-full mt-2" />
            )}
          </div>
        )}
      </div>
      <div className="post-actions flex items-center justify-between mt-2">
        <UpvoteDownvote postId={id} onVote={onVote} />
        <button
          onClick={() => onToggleComments(id)}
          className="toggle-comments-button px-4 py-2 bg-yellow-500 text-black rounded"
        >
          {showComments ? 'Hide Comments' : `View ${comments.length} Comment${comments.length !== 1 ? 's' : ''}`}
        </button>
      </div>
      {showComments && (
        <div className="comments-section mt-4">
          <Comment comments={comments} />
          <CommentForm postId={id} onComment={onComment} />
        </div>
      )}
    </div>
  );
};

export default Post;






