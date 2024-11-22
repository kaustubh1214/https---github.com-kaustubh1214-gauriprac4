import React from 'react';
import exampleImages from '../images/example.jpg';

const Content = () => {
  return (
    <div>
      <h2>Explore Our Content</h2>
      <p>Here, you'll find engaging and insightful material crafted just for you.</p>
      <p>Enjoy this additional section, filled with unique and personalized content.</p>
      <img src={exampleImages} alt="A descriptive view" className="content-image"  />
    </div>
  );
};

export default Content;

