import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import {Context} from '../context/BlogContext';

// Context is used to move data around

const IndexScreen = () => {
    // recieve from Blog Context (the Provider)
    const {state, addBlogPost} = useContext(Context); // get BlogContext data
    return (
        <View>
            <Text>Index Screen</Text>
            <Button
                title='Add Post'
                onPress={() => addBlogPost()} // or onPress={addBlogPost}
            />
            <FlatList 
                data={state} // state is the list of blog posts
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return <Text>{item.title}</Text>
                }} 
                />
        </View>
    ); // end return by the way item is each blogPost object
}; // end IndexScreen

const styles = StyleSheet.create({});

export default IndexScreen;