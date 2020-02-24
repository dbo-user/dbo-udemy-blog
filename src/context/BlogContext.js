import React, {useState} from 'react';

// This is the Blog Post Provider in the diagram

const BlogContext = React.createContext(); // create context object used to move info to BlogList
// context object comes with a provider that makes info available to all child components

// children props makes data available to other child components
export const BlogProvider = ({children}) => {
    //blogPosts is a state variable and anytime it changes he entire site will rerender
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}]); // create new array and put all of the current blogs inside
    }

    return ( // return this back to the Index Screen
        <BlogContext.Provider value={{data: blogPosts, addBlogPost: addBlogPost}}>
            {children}
        </BlogContext.Provider>
    );
}; // end BlogProvider

export default BlogContext;