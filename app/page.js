"use client";
import React, { useState, useEffect } from 'react';
import Post from '../app/components/Timeline/Post';
import Sidebar from '../app/components/Sidebar';
import RightSidebar from '../app/components/RightSidebar';
import { mockTimelinePosts, mockComments } from '../app/lib/mockData';
import Hero from '../app/components/common/Hero';
import Impact from '../app/components/Impact';
import Services from '../app/components/Services'; // Import the Services component
import Partners from '../app/components/Partners'; // Import the Partners component

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

  const onToggleComments = (postId) => {
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
    <>
      <Hero />
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4">
            <div className="mt-24 mb-4 w-full max-w-7xl mx-auto p-5 bg-gray-200 shadow-md rounded-lg flex items-start">
              <div className="mr-7">
                <input
                  id="profile-photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePhotoChange}
                  className="hidden"
                />
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-12 h-12 rounded-full cursor-pointer"
                  onClick={() => document.getElementById("profile-photo-upload").click()}
                />
              </div>
              <textarea
                placeholder="What's on your mind?"
                className="flex-1 p-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="flex ml-3">
                <label htmlFor="video-upload" className="cursor-pointer">
                  🎥
                  <input
                    id="video-upload"
                    type="file"
                    accept="video/*"
                    onChange={handleMediaChange}
                    className="hidden"
                  />
                </label>
                <label htmlFor="media-upload" className="cursor-pointer ml-2">
                  📷
                  <input
                    id="media-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleMediaChange}
                    className="hidden"
                  />
                </label>
              </div>
              <button
                className="ml-4 px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600"
                onClick={handlePublish}
              >
                Publish
              </button>
            </div>

            {isMounted && Array.isArray(posts) && posts.length > 0 && posts.map((post, index) => (
              <div
                key={post.id}
                className={`mb-3 w-full max-w-7xl mx-auto bg-gray-100 p-4 shadow-md rounded-lg ${index === 0 ? 'mt-0' : 'mt-4'}`}
              >
                <Post
                  post={post}
                  comments={comments[post.id] || []}
                  showComments={showComments[post.id] || false}
                  onToggleComments={onToggleComments} // Ensure this is passed correctly
                  onVote={handleVote}
                  onComment={handleComment}
                />
              </div>
            ))}

          </main>
          <RightSidebar />
        </div>
      </div>
      <Services /> {/* Insert Services component */}
              <Partners /> {/* Insert Partners component */}
              <Impact /> {/* Insert Impact component */}
    </>
  );
};

export default TimelinePage;

