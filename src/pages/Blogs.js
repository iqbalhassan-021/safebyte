import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBAr';
import Footer from '../components/Footer';
import Ads from '../components/Ads';
import { firestore } from '../firebase';
import { collection, getDocs } from "firebase/firestore"; 
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsCollection = collection(firestore, 'blogs');
      const blogSnapshot = await getDocs(blogsCollection);
      const blogList = blogSnapshot.docs.map(doc => ({ name: doc.id, ...doc.data() }));
      setBlogs(blogList);
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <Ads></Ads>
      <div className="container">
        <div className="body-cover">
          <div className="blogs-section">
            {blogs.map((blog) => (
              <Link to={`/blog/${blog.name}`} key={blog.name} className="no-decoration">
                <div className="tab">
                  <img src={blog.blogImage} alt={blog.blogTitle} className="blog-image" />
                  <h3>{blog.blogTitle}</h3>
                </div>

              </Link>
            ))}
          </div>
        </div>
      </div>
      <Ads></Ads>
      <Footer />
    </>
  );
};

export default Blogs;
