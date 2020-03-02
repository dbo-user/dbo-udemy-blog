import createDataContext from './createDataContext';
// jsonServer is a copy or instance of axios
import jsonServer from '../api/jsonServer'; // access to axios and baseURL

// This is the Blog Post Provider in the diagram, it manages data
// uses reducer video 132

// state is an array of all the blogposts
const blogReducer = (state, action) => {
    switch (action.type){
        case 'get_blogposts':
            return action.payload; // returns all blogposts from server
        case 'delete_blogpost': // iterate thru the blogposts and omitting the blogPost with a matching id returning a new state array of blogPosts
            return state.filter(blogPost => blogPost.id !== action.payload);
         
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

// 4 action functions: get, add, delete, edit

// dispatch an action to make a get request to server to retrievea list of blogposts
const getBlogPosts = (dispatch) => {
    // return a new function also the callback will go back to createscreen so it can navigate to indexscreen
    return async () => { // receive title and content from createscreen and blogPostForm
        // response is a list of retrieved blogposts
        const response = await jsonServer.get('/blogposts'); // get request to baseURL/blogposts found in db.json
        // response.data is an array of blogpost objects, dispatch calls the reducer on line 9ish
        dispatch({ type: 'get_blogposts', payload: response.data } ); // action type for case statment
         
    }
}; // end getBlogPosts

// dispatch an action to change the state of an object, new blog is stored on the jsonServer
const addBlogPost = (dispatch) => {
    // return a new function also the callback will go back to createscreen so it can navigate to indexscreen
    return async (title, content, callback) => { // receive title and content from createscreen and blogPostForm
        await jsonServer.post('/blogposts', { title, content }); // get request to baseURL/blogposts found in db.json
        // anytime we add a blogpost we store it on the jsonServer and then indexscreen shows it so we don't need the old dispatch line
        // don't need dispatch({ type: 'add_blogpost', payload: {title, content} } ); // don't need action type for case statment
        if (callback) { // prevents runtime error if callback is not used
            callback(); // go back to createscreen and from there on to the indexscreen
        } 
    }
}; // end addBlogPost

// dispatch an action to delete the state of an object
const deleteBlogPost = (dispatch) => {
    // return a new function
    return async (id) => {
        // delete blogpost from the jsonServer
        await jsonServer.delete(`/blogposts/${id}`);
        // also delete blog post from list on client side to get a new list
        dispatch({ type: 'delete_blogpost', payload:id}); // action type for case statment
    }
}; // end deleteBlogPost

// dispatch an action to edit the state of an object
const editBlogPost = (dispatch) => {
    // return a new function also the callback will go back to editscreen so it can navigate to indexscreen
    return async (id, title, content, callback) => { // receive id, title and content from editscreen and blogPostForm
        await jsonServer.put(`blogposts/${id}`, { title, content });
        dispatch({ type: 'edit_blogpost', payload: { id, title, content} } ); // action type for case statment
        if (callback) { // prevents runtime error if callback is not used
            callback(); // go back to editscreen
        }
    }
}; // end editBlogPost

// context and provider come from createDataContext.js
// receive the reducer function, the action and the initial state
export const { Context, Provider} = createDataContext(
    blogReducer,
     { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, // makes these functions available to the entire app
      [] // empty array for initial state
);