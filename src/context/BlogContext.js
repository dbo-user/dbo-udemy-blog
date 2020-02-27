import createDataContext from './createDataContext';

// This is the Blog Post Provider in the diagram
// uses reducer video 132

const blogReducer = (state, action) => {
    switch (action.type){
        case 'delete_blogpost': // iterate thru the blogposts and omitting the blogPost with a matching id returning a new state array of blogPosts
            return state.filter(blogPost => blogPost.id !== action.payload);
        case 'add_blogpost':
            return [...state,
                {id: Math.floor(Math.random() * 99999),
                     title: action.payload.title,
                     //`Blog Post #${state.length + 1}`}]
                     content: action.payload.content
                }
            ];    
        default:
            return state;
    }
}; // end blogReducer

// dispatch an action to change the state of an object
const addBlogPost = (dispatch) => {
    // return a new function
    return (title, content) => { // receive title and content from createscreen
        dispatch({ type: 'add_blogpost', payload: {title, content}}); // action type for case statment
    }
}; // end addBlogPost

// dispatch an action to change the state of an object
const deleteBlogPost = (dispatch) => {
    // return a new function
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload:id}); // action type for case statment
    }
}; // end deleteBlogPost

// context and provider come from createDataContext.js
// receive the reducer function, the action and the initial state
export const { Context, Provider} = createDataContext(
    blogReducer,
     { addBlogPost, deleteBlogPost },
      []
);