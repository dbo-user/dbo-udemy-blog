import createDataContext from './createDataContext';

// This is the Blog Post Provider in the diagram
// uses reducer video 132

// state is an array of all the blogposts
const blogReducer = (state, action) => {
    switch (action.type){
        case 'delete_blogpost': // iterate thru the blogposts and omitting the blogPost with a matching id returning a new state array of blogPosts
            return state.filter(blogPost => blogPost.id !== action.payload);
        case 'add_blogpost':
            return [...state,
                {id: Math.floor(Math.random() * 99999), // id will be integer from 0 to 99,998
                     title: action.payload.title,
                     //`Blog Post #${state.length + 1}`}]
                     content: action.payload.content
                }
            ]; 
        case 'edit_blogpost':
            // iterate thru each blogPost, look for id that matches id from edit screen blogpost
            return state.map (( blogPost ) => {
                return blogPost.id === action.payload.id // compare the ids for equal
                    ? action.payload // true match found so return the edited blogpost
                    : blogPost; // false no match so return untouched blogpost
        });
        default: // possible error becasue the action was not recognized
            return state; // return the array of blogposts
    }
}; // end blogReducer

// 3 action functions: add, delete, edit
// dispatch an action to change the state of an object
const addBlogPost = (dispatch) => {
    // return a new function also the callback will go back to createscreen so it can navigate to indexscreen
    return (title, content, callback) => { // receive title and content from createscreen and blogPostForm
        dispatch({ type: 'add_blogpost', payload: {title, content} } ); // action type for case statment
        if (callback) { // prevents runtime error if callback is not used
            callback(); // go back to createscreen
        } 
    }
}; // end addBlogPost

// dispatch an action to delete the state of an object
const deleteBlogPost = (dispatch) => {
    // return a new function
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload:id}); // action type for case statment
    }
}; // end deleteBlogPost

// dispatch an action to edit the state of an object
const editBlogPost = (dispatch) => {
    // return a new function also the callback will go back to editscreen so it can navigate to indexscreen
    return (id, title, content, callback) => { // receive id, title and content from editscreen and blogPostForm
        dispatch({ type: 'edit_blogpost', payload: { id, title, content} } ); // action type for case statment
        if (callback) { // prevents runtime error if callback is not used
            callback(); // go back to editscreen
        }
    }
}; // end addBlogPost

// context and provider come from createDataContext.js
// receive the reducer function, the action and the initial state
export const { Context, Provider} = createDataContext(
    blogReducer,
     { addBlogPost, deleteBlogPost, editBlogPost },
      []
);