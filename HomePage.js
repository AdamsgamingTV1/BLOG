import React from 'react';
import BlogList from './BlogList';

const HomePage = () => {
    const posts = [
        { title: 'First Post', content: 'This is the content of the first post.' },
        { title: 'Second Post', content: 'This is the content of the second post.' },
    ];

    return (
        <div>
             <BlogList posts={posts} />
        </div>
    );
};

export default HomePage;
