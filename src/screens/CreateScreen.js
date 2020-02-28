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
                onChangeText={(text) => setTitle(text)}
            />

            <Text style={styles.labelStyle}>Enter Content:</Text>
            <TextInput 
                style={styles.inputStyle} 
                value={content} // update content wth new text content
                onChangeText={(text) => setContent(text)} 
            />
            <View style={styles.buttonStyle}>
                <Button 
                    title='Add Blog Post'
                    onPress={() => // addBlogPost from BlogContext passing title and content
                        addBlogPost(title,content, () => {
                        navigation.navigate('Index'); // go back to index screen after adding new blogpost
                    })} 
                    />
            </View>

        </View>
    );
}; // end CreateScreen

CreateScreen.navigationOptions = ({ navigation }) => {
    return {
        headerStyle: { backgroundColor: 'red' },
        title: 'Create Blogpost'
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

export default CreateScreen;