import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import {Context} from '../context/BlogContext';
// Context provides a way to share data between components
import BlogPostForm from '../components/BlogPostForm';

// called from ShowScreen line 33ish
const EditScreen = ({ navigation }) => {
    // id is the blogpost id
    const id = navigation.getParam('id'); // just to save some typing

    // state is all of the blogposts
    const { state, editBlogPost } = useContext(Context);
    // editBlogPost function is in BlogContext.js

    // search thru the blogposts for a matching blogpost id
    // blogPost will have the current values of title and content
    const blogPost = state.find(
        blogPost => blogPost.id === id
    ); // end const blogPost

    // used to update the values of title and content
    

    // use addBlogPost from BlogContext.js
    //const { editBlogPost } = useContext(Context);
    
    return (
        // show BlogPostForm calling the onSubmit function
        <BlogPostForm 
            // initialValues is the current values of title and content
            initialValues={{ title: blogPost.title, content: blogPost.content}}
            onSubmit={(title, content) => {
            editBlogPost(id,title,content, () => navigation.pop()); // go back one screen to the previous screen which is the show screen
            // BlogPostForm shows the input fields
            // addBlogPost is used in BlogContext to add a new post
        }} />
    ); // end return

}; // end EditScreen

EditScreen.navigationOptions = ({ navigation }) => {
    return {
        headerStyle: { backgroundColor: 'red' },
        title: 'Edit Blogpost'
    }; // end return
}; // end navigationOptions

const styles = StyleSheet.create({
    inputStyle: {
        fontSize:18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    labelStyle: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5
    },
    buttonStyle: {
        margin: 20
    }
});

export default EditScreen;