import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/NavBAr';
import Footer from '../components/Footer';
import { firestore } from '../firebase';
import { doc, getDoc } from "firebase/firestore"; 
import Ads from '../components/Ads';

const BlogDetail = () => {
  const { name } = useParams(); // Get the document name from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const blogDoc = doc(firestore, 'blogs', name); // Use the document name
      const blogData = await getDoc(blogDoc);
      if (blogData.exists()) {
        setBlog(blogData.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchBlog();
  }, [name]);

  if (!blog) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <Ads></Ads>
      <div className="container">
        <div className='body-cover center'>
        <div className="blog-detail">
          <img src={blog.blogImage} alt={blog.blogTitle} className="blog-image-detail" />
          <h1>{blog.blogTitle}</h1>
          <p>{blog.blogContent}</p>
        </div>
      </div>
      </div>
      <Ads></Ads>
      <Footer />
    </>
  );
};

export default BlogDetail;
