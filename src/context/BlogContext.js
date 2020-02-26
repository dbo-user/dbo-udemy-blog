import createDataContext from './createDataContext';

// This is the Blog Post Provider in the diagram
// uses reducer video 132

const blogReducer = (state, action) => {
    switch (action.type){
        case 'add_blogpost':
            return [...state, {title: `Blog Post #${state.length + 1}`}]
        default:
            return state;
    }
}; // end blogReducer

const addBlogPost = (dispatch) => {
    // return a new function
    return () => {
        dispatch({ type: 'add_blogpost'}); // action type for case statment
    }
}; // end addBlogPost

// context and provider come from createDataContext.js
// receive the reducer function, the action and the initial state
export const { Context, Provider} = createDataContext(
    blogReducer,
     { addBlogPost },
      []
);