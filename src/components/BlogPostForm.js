import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

// receive onSubmit from Create or Edit screens
// initialValues is only from Edit screen, it will be the title and content
const BlogPostForm = ({onSubmit, initialValues}) => {

    // used to update the values of title and content
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

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
                    title='Save Blog Post'
                    onPress={() => // run onSubmit function from Create or Edit and passing title and content
                        onSubmit(title,content)}
                    />
            </View>

        </View>
    ); // end return
}; // end BlogPostForm

// default values to avoid runtime error for create screen
// because initialValues are not used on the create screen just the edit screen
BlogPostForm.defaultProps = {
    initialValues: { // just for the create screen values
        title: '', 
        content: ''
    }
}; // end defaultProps

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

export default BlogPostForm;