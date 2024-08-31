// src/components/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.message}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" style={styles.link}>Go Back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: '3rem',
    color: '#dc3545',
  },
  message: {
    fontSize: '1.5rem',
    margin: '20px 0',
  },
  link: {
    fontSize: '1.2rem',
    color: '#007bff',
    textDecoration: 'underline',
  },
};

export default NotFound;
