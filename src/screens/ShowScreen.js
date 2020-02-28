import React, {useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
// Context provides a way to share data between components
import {EvilIcons} from '@expo/vector-icons';

// called from IndexScreen line 24ish
const ShowScreen = ({ navigation }) => {
    // blogpost id from IndexScreen line 24
    const blogpostId = navigation.getParam('id');
    // state is all of the blogposts
    const {state} = useContext(Context);
    
    // search thru the blogposts for a matching blogpost id
    const blogPost = state.find((blogPost) => blogPost.id === blogpostId)

    return (
        <View>
            <Text>Blog: { blogPost.title }</Text>
            <Text>Content: { blogPost.content }</Text>
        </View>
    );
}; // end ShowScreen

// insert pencil on the header line of ShowScreen
ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        title: 'Show Blogpost',
        headerStyle: { backgroundColor: 'red' },
        // click the pencil to go to the EditScreen
        headerRight: () => 
            <TouchableOpacity onPress={() => // go to the editscreen and pass the blogpost id
                navigation.navigate('Edit', { id: navigation.getParam('id') })}>
                <EvilIcons style={styles.iconPencilStyle} name="pencil" />
            </TouchableOpacity>  
    }; // end return
}; // end navigationOptions

const styles = StyleSheet.create({
    iconPencilStyle :{
        marginRight: 10,
        fontSize: 35
    }
});

export default ShowScreen;