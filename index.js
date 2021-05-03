import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux'
import store from './src/redux/store';
import React from 'react';

function Index(){
    return(
        <Provider store={store}><App/></Provider>
    )
}

AppRegistry.registerComponent('main', () => Index);
