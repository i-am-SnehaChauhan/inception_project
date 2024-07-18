import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import EmptyList from '../../Components/common/EmptyList';
import './styles.css';

// Sample blogList and Chip component imported for completeness (replace with your actual components/data)
import { blogList } from '../../config/data';
import Chip from '../../Components/common/Chip';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', text: '' });

  useEffect(() => {
    let foundBlog = blogList.find((blog) => blog.id === parseInt(id));
    if (foundBlog) {
      setBlog(foundBlog);
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: '', text: '' });
    }
  };

  // Sample reviews with names (static data)
  const sampleReviews = [
    { name: 'John Doe', text: 'Great blog post!' },
    { name: 'Jane Smith', text: 'Interesting read.' },
    { name: 'Mike Johnson', text: 'Very informative.' },
    { name: 'Emily Brown', text: 'Enjoyed it thoroughly.' },
  ];

  return (
    <>
      <Navbar />
      {/* <Link className='blog-goBack' to='/readingArea'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link> */}
      {blog ? (
        <div className='blog-container'>
          <div className='blog-left'>
            <h1 className='blog-title'>{blog.title}</h1>
            <img src={blog.cover} alt='cover' className='blog-cover' />
            <p className='blog-desc'>{blog.description}</p>
            <div className='blog-subCategory'>
              {blog.subCategory &&
                blog.subCategory.map((category, i) => (
                  <div key={i}>
                    <Chip label={category} />
                  </div>
                ))}
            </div>
          </div>
          <div className='blog-right'>
           
            <div className='reviews'>
              {sampleReviews.map((review, index) => (
                <div key={index} className='review'>
                  <h4>{review.name}</h4>
                  <p>{review.text}</p>
                </div>
              ))}
            </div>
            <div className='review-form'>
              <h2>Submit a Review</h2>
              <form onSubmit={handleFormSubmit}>
                <input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  value={newReview.name}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name='text'
                  placeholder='Your Review'
                  value={newReview.text}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <button type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
