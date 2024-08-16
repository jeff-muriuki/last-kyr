"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../app/components/Timeline/Post';
import Sidebar from '../app/components/Sidebar';
import RightSidebar from '../app/components/RightSidebar';
import Hero from '../app/components/common/Hero';
import Impact from '../app/components/Impact';
import Services from '../app/components/Services';
import Partners from '../app/components/Partners';

const TimelinePage = () => {
  const [posts, setPosts] = useState([]);
  const [showComments, setShowComments] = useState({});
  const [comments, setComments] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [media, setMedia] = useState(null);
  const [profileImage, setProfileImage] = useState("/default-profile.jpg");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://necessary-card-750e65ba7c.strapiapp.com/api/timeline-posts');
        setPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
    setIsMounted(true);
  }, []);

  const fetchComments = async (postId) => {
    try {
      const response = await axios.get(`https://necessary-card-750e65ba7c.strapiapp.com/api/comments?filters[postId][$eq]=${postId}`);
      setComments((prevComments) => ({
        ...prevComments,
        [postId]: response.data.data,
      }));
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handlePublish = async () => {
    if (inputValue.trim() === "") return;

    const newPost = {
      data: {
        Content: inputValue,
        publishedAt: new Date().toISOString(),
      }
    };

    try {
      const response = await axios.post('https://necessary-card-750e65ba7c.strapiapp.com/api/timeline-posts', newPost);
      setPosts([response.data.data, ...posts]);
      setInputValue("");
      setMedia(null); // Clear media after publishing
    } catch (error) {
      console.error("Error publishing post:", error);
    }
  };

  const handleVote = async (postId, type) => {
    try {
      await axios.post('https://necessary-card-750e65ba7c.strapiapp.com/api/likes', {
        data: {
          postId,
          type,
        }
      });
    } catch (error) {
      console.error("Error handling vote:", error);
    }
  };

  const onToggleComments = (postId) => {
    setShowComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));

    if (!comments[postId]) {
      fetchComments(postId);
    }
  };

  const handleComment = async (postId, commentText) => {
    if (!commentText || !commentText.trim()) {
      console.error("Invalid comment:", commentText);
      return;
    }

    const newComment = {
      data: {
        Content: commentText.trim(),
        postId,
      },
    };

    try {
      const response = await axios.post('https://necessary-card-750e65ba7c.strapiapp.com/api/comments', newComment);
      console.log("Comment submitted:", response.data); // Log response from API
      setComments((prevComments) => ({
        ...prevComments,
        [postId]: [...(prevComments[postId] || []), response.data.data],
      }));
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
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
        <div className="flex flex-col lg:flex-row">
          <Sidebar className="hidden lg:block lg:w-1/4" />
          <main className="flex-1 p-4 lg:p-8 mx-auto max-w-7xl">
            <div className="mb-4 w-full bg-gray-200 shadow-md rounded-lg flex flex-col lg:flex-row lg:items-start p-5">
              <div className="mb-4 lg:mb-0 lg:mr-7 flex items-center">
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
              <div className="flex-1">
                <textarea
                  placeholder="What's on your mind?"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="flex flex-wrap items-center mt-2">
                  <label htmlFor="video-upload" className="cursor-pointer mr-2">
                    🎥
                    <input
                      id="video-upload"
                      type="file"
                      accept="video/*"
                      onChange={handleMediaChange}
                      className="hidden"
                    />
                  </label>
                  <label htmlFor="media-upload" className="cursor-pointer">
                    📷
                    <input
                      id="media-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleMediaChange}
                      className="hidden"
                    />
                  </label>
                  <button
                    className="ml-4 px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600"
                    onClick={handlePublish}
                  >
                    Publish
                  </button>
                </div>
              </div>
            </div>

            {isMounted && Array.isArray(posts) && posts.length > 0 && posts.map((post, index) => (
              <div
                key={post.id}
                className={`mb-3 w-full bg-gray-100 p-4 shadow-md rounded-lg ${index === 0 ? 'mt-0' : 'mt-4'}`}
              >
                <Post
                  post={post}
                  comments={comments[post.id] || []}
                  showComments={showComments[post.id] || false}
                  onToggleComments={onToggleComments}
                  onVote={handleVote}
                  onComment={(postId, commentText) => handleComment(postId, commentText)}
                />
              </div>
            ))}
          </main>
          <RightSidebar className="hidden lg:block lg:w-1/4" />
        </div>
      </div>
      <Services />
      <Partners />
      <Impact />
    </>
  );
};

export default TimelinePage;


