import React from 'react';
import fs from 'fs';


const Post = () => {
    return (<div>Hello</div>)
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync('posts');
    console.log("files: ", files);
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }));
}

export default Post;