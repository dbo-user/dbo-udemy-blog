import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import {Provider} from './src/context/BlogContext';

const navigator = createStackNavigator({
    Index: IndexScreen
}, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
        title: 'Blog List',
        headerTitleAlign: 'center'
    }
}); // end const navigator

//export default createAppContainer(navigator); normally would do this but
//this blog is using a blog post provider wrapper that wraps around the entire application

// so make a custom App component
const App = createAppContainer(navigator);

// passing App to children in Provider
export default () => {
  return (
    <Provider>
      <App /> 
    </Provider>
  );
};
