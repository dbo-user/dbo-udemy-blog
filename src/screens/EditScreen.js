import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Context} from '../context/BlogContext';
// Context provides a way to share data between components

// called from ShowScreen line 33ish
const EditScreen = ({ navigation }) => {
    // state is all of the blogposts
    const { state } = useContext(Context);

    // search thru the blogposts for a matching blogpost id
    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    ); // end const blogPost

    // used to update the values of title and content
    const [title, setTitle] = useState(blogPost.title); // the title to edit
    const [content, setContent] = useState(blogPost.content); // the content to edit
    
    return (
        <View>
            <Text>Edit Title:</Text>
            <TextInput value={title}
                onChangeText={(newTitle) => setTitle(newTitle)} />

            <Text>Edit Content:</Text>
            <TextInput value={content}
                onChangeText={(newContent) => setContent(newContent)} />
        </View>
    ); // end return
}; // end EditScreen

const styles = StyleSheet.create({});

export default EditScreen;