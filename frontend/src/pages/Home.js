import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useBlog } from '../hooks/useBlogContext';
import { Link } from 'react-router-dom';

function Home() {
  const { blogs, dispatch } = useBlog();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/blogs', {
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'GET_ALL_BLOGS', payload: json })
      }
    }

    fetchBlogs()

  }, [dispatch])

  return (
    <div className='home-page'>
      <Navbar />
      <div className="blogs contetnt">{
        blogs == null ? <h2>No Blogs has post</h2>
          : <>
            <h2>All Blogs</h2>
            {blogs.map(blog => (
              <Link to={`/blogs/${blog._id}`} className="single">
                <h3 className="title">
                  {blog.title}
                </h3>
                <p className="author">
                  {blog.author}
                </p>
              </Link>
            ))}
          </>
      }
      </div>
      <Footer />
    </div>
  );

}

export default Home