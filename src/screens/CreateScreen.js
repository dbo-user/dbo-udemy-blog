import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {Context} from '../context/BlogContext';
// Context provides a way to share data between components

// called from IndexScreen line 24ish
const CreateScreen = ({ navigation }) => {
    // used to update the values of title and content
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    // use addBlogPost from BlogContext.js
    const { addBlogPost } = useContext(Context);

    return (
        <View>
            <Text style={styles.labelStyle}>Enter Title:</Text>
            <TextInput 
                style={styles.inputStyle} 
                value={title} // update title with new text title
                onChangeText={(text) => setTitle(text)}/>
            <Text style={styles.labelStyle}>Enter Content:</Text>
            <TextInput 
                style={styles.inputStyle} 
                value={content} // update content wth new text content
                onChangeText={(text) => setContent(text)} />

                <Button 
                    title='Add Blog Post'
                    onPress={() => addBlogPost(title,content)} // addBlogPost from BlogContext passing title and content
                    />

        </View>
    );
}; // end ShowScreen

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
    }
});

export default CreateScreen;