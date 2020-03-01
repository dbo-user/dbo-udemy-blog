import React, {useContext} from 'react';
import { StyleSheet } from 'react-native';
import {Context} from '../context/BlogContext';
// Context provides a way to share data between components
import BlogPostForm from '../components/BlogPostForm';

// called from IndexScreen line 24ish
const CreateScreen = ({ navigation }) => {
    
    // use addBlogPost from BlogContext.js
    const { addBlogPost } = useContext(Context);

    return (
        // show BlogPostForm calling the onSubmit function
        <BlogPostForm onSubmit={(title, content) => {
        addBlogPost(title,content, () => navigation.navigate('Index'))
        // BlogPostForm shows the input fields
        // addBlogPost is used in BlogContext to add a new post
    }} />
    ); // end return
}; // end CreateScreen

CreateScreen.navigationOptions = ({ navigation }) => {
    return {
        headerStyle: { backgroundColor: 'red' },
        title: 'Create Blogpost'
    }; // end return
}; // end navigationOptions

const styles = StyleSheet.create({
   
});

export default CreateScreen;