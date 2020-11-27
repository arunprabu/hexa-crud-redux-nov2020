import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <br />
      <h1 className="mt-5">Home Page!</h1>
      <p>Welcome to My Blog App!</p>
      <Link to='/posts/new' className="btn btn-primary">Write a Blog Post</Link>
    </div>
  )
}

export default Home;
