"use client";
import React, { useState, useEffect } from 'react';
import Post from '../components/Timeline/Post';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import { mockTimelinePosts, mockComments } from '../lib/mockData';

const TimelinePage = () => {
  const [posts, setPosts] = useState([]);
  const [showComments, setShowComments] = useState({});
  const [comments, setComments] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [media, setMedia] = useState(null);
  const [profileImage, setProfileImage] = useState("/default-profile.jpg");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setPosts(mockTimelinePosts);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      const commentsMap = mockTimelinePosts.reduce((acc, post) => {
        acc[post.id] = mockComments.data;
        return acc;
      }, {});
      setComments(commentsMap);
    }
  }, [isMounted]);

  const handlePublish = async () => {
    if (inputValue.trim() === "") return;

    const newPost = {
      id: Date.now(),
      attributes: {
        Content: inputValue,
        Publication_Timestamp: new Date().toISOString(),
        Upvote: "0",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
      },
      userImage: profileImage,
      media: media, // Include media in the post
    };

    try {
      setPosts([newPost, ...posts]);
      setInputValue("");
      setMedia(null); // Clear media after publishing
    } catch (error) {
      console.error("Error publishing post:", error.message);
    }
  };

  const handleVote = (postId, type) => {
    console.log('Vote response:', { postId, type });
  };

  const toggleComments = (postId) => {
    setShowComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleComment = (postId, comment) => {
    const newComment = { 
      id: Date.now(), 
      attributes: { Content: comment.text, createdAt: new Date().toISOString() } 
    };

    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), newComment],
    }));
  };

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.startsWith("video/") ? "video" : "image";
      setMedia({ url: URL.createObjectURL(file), type: fileType });
    }
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <div className="top-container mb-4 p-4 bg-white shadow-md flex items-start">
          <div className="profile-photo-container">
            <input
              id="profile-photo-upload"
              type="file"
              accept="image/*"
              onChange={handleProfilePhotoChange}
              style={{ display: "none" }}
            />
            <img
              src={profileImage}
              alt="Profile"
              className="profile-photo cursor-pointer"
              onClick={() => document.getElementById("profile-photo-upload").click()}
            />
          </div>
          <textarea
            placeholder="What's on your mind?"
            className="whats-on-your-mind-input flex-1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="media-buttons flex ml-2">
            <label htmlFor="video-upload" className="media-button cursor-pointer">
              🎥
              <input
                id="video-upload"
                type="file"
                accept="video/*"
                onChange={handleMediaChange}
                style={{ display: "none" }}
              />
            </label>
            <label htmlFor="media-upload" className="media-button cursor-pointer ml-2">
              📷
              <input
                id="media-upload"
                type="file"
                accept="image/*"
                onChange={handleMediaChange}
                style={{ display: "none" }}
              />
            </label>
          </div>
          <button
            className="publish-btn ml-4 px-4 py-2 bg-yellow-500 text-black rounded"
            onClick={handlePublish}
          >
            Publish
          </button>
        </div>

        {isMounted && Array.isArray(posts) && posts.length > 0 && posts.map((post, index) => (
          <div
            key={post.id}
            className={`post-container ${index === 0 ? 'first-post-container' : ''} mb-4 w-full max-w-2xl mx-auto`}
          >
            <Post
              post={post}
              onVote={handleVote}
              onToggleComments={toggleComments}
              showComments={showComments}
              onComment={handleComment}
              comments={comments[post.id] || []}
            />
          </div>
        ))}
      </main>
      <RightSidebar />
    </div>
  );
};

export default TimelinePage;