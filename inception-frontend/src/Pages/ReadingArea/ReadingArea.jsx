import React,{useState} from 'react'
import Header from '../../Components/Header'
import SearchBar from '../../Components/SearchBar'
import BlogList from '../../Components/BlogList'
import { blogList } from '../../config/data'
import EmptyList from '../../Components/common/EmptyList'

const ReadingArea = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search Submit
  const handleSearchSubmit = event => {
    event.preventDefault();
    handleSearchResult();
  }

  // Search Key
  const handleSearchResult = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter(blog => 
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
  
    setBlogs(filteredBlogs);
  };

  // Clear Search
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  }

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar 
        value={searchKey} 
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit} 
        handleSearchKey={(e)=>setSearchKey(e.target.value)}
      />

      {/* Blog List */}
      {!blogs.length?<EmptyList/>:<BlogList blogs={blogs}/>}
    </div>
  )
}

export default ReadingArea;
