import React, {useReducer} from 'react';

// re-usable function that receives 3 things-  a reducer function, a dispatch action, an initialState
export default (reducer, actions, initialState) => {
    // will return a context object and a provider function on line 16
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        
        // actions is an object {addBlogPost: (dispatch) => {return () => }}
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        // provider function returns this
        return <Context.Provider value={{ state:state, ...boundActions }}>
            {children}
        </Context.Provider>
    } // end const Provider

    return { Context, Provider };
}; // end export default