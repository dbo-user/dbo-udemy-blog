import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

// Context is used to move data around

const IndexScreen = ({ navigation }) => {
    // recieve from Blog Context (the Provider)
    const {state, deleteBlogPost} = useContext(Context); // get BlogContext data
    return (
        <View>
            
            <FlatList // FlatList is a scrollable list
                data={state} // state is the list of blog posts
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => { // will render each data item or blogpost
                    return ( // click a blogpost to go to showscreen and pass item id
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}> 
                            <View style={styles.rowStyle}>
                                <Text style={styles.titleStyle}>Blog: {item.title} - #{item.id}</Text>
                                
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
                <Feather style={styles.iconPlusStyle} name="plus" />
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
    iconPlusStyle :{
        marginRight: 10,
        fontSize: 30
    }
});

export default IndexScreen;