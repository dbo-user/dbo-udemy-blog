import React, {useReducer} from 'react';

// This is the Blog Post Provider in the diagram
// uses reducer video 131
 
const BlogContext = React.createContext(); // create context object used to move info to BlogList
// context object comes with a provider that makes info available to all child components

const blogReducer = (state, action) => {
    switch (action.type){
        case 'add_blogpost':
            return [...state, {title: `Blog Post #${state.length + 1}`}]
        default:
            return state;
    }
}; // end blogReducer

// children props makes data available to other child components
export const BlogProvider = ({children}) => {
    //blogPosts is a state variable and anytime it changes the entire site will rerender
    const [blogPosts, dispatch] = useReducer(blogReducer, []); // initial state is an empty array

    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost'}); // action type for case statment
    }; // end addBlogPost

    return ( // return this back to the Index Screen
        <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
            {children}
        </BlogContext.Provider>
    );
}; // end BlogProvider

export default BlogContext;