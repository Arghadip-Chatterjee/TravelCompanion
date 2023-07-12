import React, { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import './blogs.css'; // Import CSS file for styling

const client = sanityClient({
  projectId: 'fj9in8ja',
  dataset: 'production',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

const urlFor = (source) => {
  return builder.image(source);
};

const BlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "pet"]')
      .then((response) => setBlogPosts(response))
      .catch((error) => console.error(error));
  }, []);

  if (blogPosts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-posts-container">
      {blogPosts.map((post) => (
        <div className="blog-post" key={post._id}>
          <img className="blog-post-image" src={urlFor(post.poster.asset._ref).url()} alt={post.name} />
          <div className="blog-post-content">
            <h2 className="blog-post-title">{post.name}</h2>
            <p className="blog-post-description">{post.description}</p>
            <p className="blog-post-date">Release Date: {post.releaseDate}</p>
            <hr className="hr-line"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
