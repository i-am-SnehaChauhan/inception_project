import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">Inception</a>
        <div className='gap-4'>
          <a href="/" className="mr-10">Home</a>
          <a href="/projects" className="mr-10">Projects</a>
          <a href="/about" className="mr-10">About</a>
          <a href="/login">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
