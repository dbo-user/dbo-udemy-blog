import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

// Context is used to move data around

const IndexScreen = ({ navigation }) => {
    // recieve from Blog Context (the Provider)
    const {state, addBlogPost, deleteBlogPost} = useContext(Context); // get BlogContext data
    return (
        <View>
            <View style={styles.buttonStyle}>
                <Button 
                    title='Add Post'
                    onPress={() => addBlogPost()} // or onPress={addBlogPost}
                />
            </View>
            
            <FlatList // FlatList is a scrollable list
                data={state} // state is the list of blog posts
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => { // will render each data item or blogpost
                    return ( // click a blogpost to go to showscreen and pass item id
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}> 
                            <View style={styles.rowStyle}>
                                <Text style={styles.titleStyle}>{item.title} - {item.id}</Text>
                                
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}> 
                                    <Feather style={styles.iconStyle} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }} 
                />
        </View>
    ); // end return by the way item is each blogPost object
}; // end IndexScreen

// insert + plus sign on the header line of IndexScreen
IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerStyle: { backgroundColor: 'red' },
        // click the plus + sign to go to the CreateScreen
        headerRight: () => 
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather style={styles.iconplusStyle} name="plus" />
            </TouchableOpacity>  
    }; // end return
}; // end navigationOptions

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
    },
    iconplusStyle :{
        marginRight: 10,
        fontSize: 30
    }
});

export default IndexScreen;