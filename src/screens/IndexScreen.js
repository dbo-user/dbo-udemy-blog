import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

// Context is used to move data around

const IndexScreen = () => {
    // recieve from Blog Context (the Provider)
    const {state, addBlogPost, deleteBlogPost} = useContext(Context); // get BlogContext data
    return (
        <View>
            
            <Button 
                title='Add Post'
                onPress={() => addBlogPost()} // or onPress={addBlogPost}
            />
            
            <FlatList 
                data={state} // state is the list of blog posts
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return (
                        <View style={styles.rowStyle}>
                            <Text style={styles.titleStyle}>{item.title} - {item.id}</Text>
                            
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}> 
                                <Feather style={styles.iconStyle} name="trash" />
                            </TouchableOpacity>
                        </View>
                    );
                }} 
                />
        </View>
    ); // end return by the way item is each blogPost object
}; // end IndexScreen

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    titleStyle: {
        fontSize: 18
    },
    iconStyle: {
        fontSize: 24
    },
    buttonStyle: {
        margin: 20
    }
});

export default IndexScreen;