import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Context} from '../context/BlogContext';
// Context provides a way to share data between components

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
            <Text>{ blogPost.title }</Text>
        </View>
    );
}; // end ShowScreen

const styles = StyleSheet.create({});

export default ShowScreen;