import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { collection, getDocs, limit } from "firebase/firestore";
import { Link } from 'react-router-dom';

function RecentBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsCollection = collection(firestore, 'blogs');
      const blogsQuery = limit(3); // Limit to 3 blogs
      const blogSnapshot = await getDocs(blogsCollection, blogsQuery);
      const blogList = blogSnapshot.docs.map(doc => ({ name: doc.id, ...doc.data() }));
      setBlogs(blogList);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blogs flex-center-colum">
      <div className="body-cover">
        <div className="grid-3x">
          {blogs.map((blog) => (
            <Link to={`/blog/${blog.name}`} key={blog.name} className="no-decoration">
              <div className="tab">
                <img src={blog.blogImage || '/assets/images/placeholder.jpg'} alt={blog.blogTitle} className="blog-image-small" />
                <h3>{blog.blogTitle}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentBlogs;
